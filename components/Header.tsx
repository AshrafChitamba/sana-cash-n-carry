export const Header = () => {
  return (
    <header className="sticky">
      <nav className="flex justify-center bg-white border py-3.5 px-5 backdrop-blur-xs">
        <ul className="flex items-center gap-x-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Our locations</a>
          </li>
          <li>
            <a href="#">Why us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
