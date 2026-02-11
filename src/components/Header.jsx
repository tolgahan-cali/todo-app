export function Header({ tasks }) {
  const activeTaskCount = tasks.filter((task) => task.isChecked === false);
  return (
    <header>
      <h1>Görevler</h1>
      <p>Bugün yapılacak {activeTaskCount.length} işin var</p>
    </header>
  );
}
