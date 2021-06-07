import { v4 as uuidv4 } from "uuid";
const movies = [
  {
    id: uuidv4(),
    title: "NOBODY",
    description:
      "A nobody. When two thieves break into his suburban home one night, Hutch declines to defend himself or his family, hoping to prevent serious violence. His teenage son, Blake (Gage Munroe, The Shack), is disappointed in him and his wife, Becca (Connie Nielsen, Wonder Woman), seems to pull only further away.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/21/01/04/17/52/0328539.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/wZti8QKBWPo",
  },
  {
    id: uuidv4(),
    title: "OXYGEN",
    description:
      "A young woman awakens in an airtight medical cryogenic unit, and discovers that she is trapped and that the unit's oxygen levels are falling rapidly. Suffering from memory loss, she does not remember who she is or how she got there. She is assisted by an advanced A.I.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rating: 2,
    trailer: "https://www.youtube.com/embed/8IqXgZd-P98",
  },

  {
    id: uuidv4(),
    title: "CRUELLA",
    description:
      "Set in 1970s in London during the punk rock movement, the film follows Estella de Vil, an aspiring fashion designer, and explores the path that will lead her to become a notorious criminal known as Cruella de Vil.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/21/02/17/16/12/0290309.jpg",
    rating: 3,
    trailer: "https://www.youtube.com/embed/jpZrVxvG3mk",
  },
];
export default movies;
