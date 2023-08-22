export const AppLayout = () => {
  return (
    <div className="Layout">
      <header>Header da app</header>

      <main className="Main">
        <div className="ActionsContainer">
          <button>Ação</button>
        </div>
        <section className="MainContainer">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
