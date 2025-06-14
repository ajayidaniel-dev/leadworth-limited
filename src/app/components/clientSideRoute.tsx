"use-client";

const ClientSideRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <a rel="no-referer" className="w-full" href={route}>
      {children}
    </a>
  );
};

export default ClientSideRoute;
