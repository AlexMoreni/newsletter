import { NavbarContainer, LinkText } from "./Navbar.style";

const Navbar = ({ setHeadline }) => {
  const handleBackground = (clickedLink) => {
    if (clickedLink.innerHTML === "Ciência &amp; Tecnologia") {
      setHeadline("Ciência e Tecnologia");
    } else {
      setHeadline(clickedLink.innerHTML);
    }

    const links = document.querySelectorAll(".links-option");

    links.forEach((link) => {
      if (link === clickedLink) {
        link.classList.add("link-select");
      } else {
        link.classList.remove("link-select");
      }
    });
  };

  return (
    <NavbarContainer>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Política
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Mundo
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Economia
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Ciência & Tecnologia
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Negócios
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Viagem
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Clima
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Comida
      </LinkText>
      <LinkText
        href="#"
        className="links-option"
        onClick={(event) => {
          handleBackground(event.currentTarget);
        }}
      >
        Esportes
      </LinkText>
    </NavbarContainer>
  );
};

export default Navbar;
