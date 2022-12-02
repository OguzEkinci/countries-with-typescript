import { FC, ReactNode } from "react";
interface ILoadingProps {
  loading: boolean;
  children: ReactNode;
}
const Loading: FC<ILoadingProps> = props => {
  const { loading } = props;
  return (
    <>
      {loading ? "LOADING..." : props.children}
    </>
  );
};

export default Loading;
