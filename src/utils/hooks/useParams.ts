import { useRouter } from 'next/router';

type Params = Record<string, string>;

type UseParamsReturn = {
  params: Params;
  setParam: <T extends keyof Params>(key: T, value: Params[T]) => void;
};

function useParams(): UseParamsReturn {
  const router = useRouter();
  const params = router?.query as Params ?? {};

  const setParam = (key, value) => {
    const query = { ...params };

    if (!value || value === '') {
      delete query[key];
    } else {
      query[key] = value;
    }

    router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  return { params, setParam };
}

export default useParams;
