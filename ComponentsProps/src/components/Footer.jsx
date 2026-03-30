export default function Footer() {
  const currentTime = new Date().getHours();
  const openTime = 10;
  const closeTime = 22;
  const isOpen = currentTime > openTime && currentTime < closeTime;

  return (
    <footer>{isOpen ? <p>We are open</p> : <p>We are close!!!</p>}</footer>
  );
}
