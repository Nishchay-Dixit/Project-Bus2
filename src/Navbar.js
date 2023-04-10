import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="nav1">
        <div class="logo" href="./">
          Project Bus
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="../buslist">Bus List</a>
          </li>
          <li>
            <a href="../bus/add">Add Bus</a>
          </li>
          <li>
            <a href="../contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
