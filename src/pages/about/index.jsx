import { AboutContainer } from "./styles";
export const About = () => {
  return (
    <AboutContainer>
      <h1>
        Agradecimento especial a chef da casa! Nossa Pizzaiola {""}
        <strong style={{ color: "red" }}>Khaleesi</strong> é prendada e sabe
        cozinhar as melhores pizzas. Nasceu em Portugal, mas com raízes
        italianas, khaleesi é formada em gastronomia insana dos melhores pratos
        possíveis. Instruiu no mundo todo sobre a verace pizza napoletana.
      </h1>

      <img src="pizzeriaKhaleesi.png" alt="pizzeria Khaleesi.png" />
    </AboutContainer>
  );
};
