export const site = {
  name: "Atelier Architecture",
  studioName: "Estudio Almagro",
  description: "Arquitectura interior y reformas integrales de alto estándar en Madrid.",
  address: "Calle de Almagro 26, 28010 Madrid",
  phone: "+34 914 892 100",
  email: "info@atelier-madrid.es",
  defaultUrl: "https://www.atelier-madrid.es"
} as const;

export type SiteImage = {
  src: string;
  alt: string;
  blurDataURL: string;
};

export const images = {
  hero: {
    src: "/images/hero-living-room.jpg",
    alt: "Salón contemporáneo de arquitectura interior con grandes ventanales, madera natural y luz cálida.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAfEAACAgIBBQAAAAAAAAAAAAABAgADERIEITFBUXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8AqKBFyWHycX4WvYESfk3rVbqQWmou5z49SenlKAd1J7QjnYoSqDoYQQ6//9k="
  },
  before: {
    src: "/images/renovation-before-apartment.jpg",
    alt: "Estado previo de una vivienda compartimentada antes de una reforma integral.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAOABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EACAQAAICAQMFAAAAAAAAAAAAAAECAAQDBTFBERITFGH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8Abp6r6a9rcSYqCSPs2q3joow3Ikj2COOZFi1WaqDhDFt4ReW0TUA6QjB//9k="
  },
  during: {
    src: "/images/renovation-structure-phase.jpg",
    alt: "Fase de obra con refuerzo estructural y apertura del espacio interior.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAcEAACAgMBAQAAAAAAAAAAAAABAgADBCExERL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCYUq2U4YRrUdD4vIB/jIZiNGPZaj7kxVZmU9oIHvYSzatdhG+QiD//2Q=="
  },
  after: {
    src: "/images/renovation-finished-living-kitchen.jpg",
    alt: "Resultado final de una reforma de salón y cocina abierta con piedra natural y roble.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEA//EAB4QAAICAgMBAQAAAAAAAAAAAAECAAMEESEiMRJh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCxbUB2o1+TPKvCqfn2Jq3DE+RGrpyeZnTiEZFtraPWEqtxxZXpWCmEmE//2Q=="
  },
  craft: {
    src: "/images/carpentry-installation-oak-panels.jpg",
    alt: "Trabajo artesanal de carpintería a medida durante una reforma de alta gama.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EAB0QAAICAgMBAAAAAAAAAAAAAAECAAMEERIhMRP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCV/wAqgQG2ZldwLE34ZS0497A70R7Fsxyzq9faCDYWU7FWXqErxRsc9aYQhpv/2Q=="
  },
  limestone: {
    src: "/images/limestone-kitchen-island.jpg",
    alt: "Isla de cocina monolítica de piedra caliza en un interior minimalista.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAgEAACAgIABwAAAAAAAAAAAAABAgADERIEEyEiMTJh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDdbYozp4EW3XOWODGVS81DuNfkpt4dW9cZhUkLFtYWdx6QkrKnD4xCWNf/2Q=="
  },
  travertine: {
    src: "/images/travertine-oak-detail.jpg",
    alt: "Encuentro de travertino y roble con detalle de textura y junta arquitectónica.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABwQAAIDAAMBAAAAAAAAAAAAAAECAAMEERIiQf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AKstossI+GbcOoYSFdnQkooEVftsYHkySkNc+YSJdBZeDCEn/9k="
  },
  bathroom: {
    src: "/images/microcement-bathroom.jpg",
    alt: "Baño continuo de microcemento en tono marfil con iluminación integrada.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAcEAACAwEAAwAAAAAAAAAAAAABAgADEQQSEzH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDo9uocEkrN5HTN5CjVHTsYphJQwU4W5WNWr9hIWdLLqmEKv//Z"
  },
  pivotDoor: {
    src: "/images/flush-pivot-door.jpg",
    alt: "Puerta pivotante enrasada de suelo a techo integrada en el plano de pared.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABwQAAICAwEBAAAAAAAAAAAAAAECAAMREiEEQf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANKyrK7KciR1jDtHJdoMfIlF3tJPBM1pPXa6PgDkI/0oCfnIQL//2Q=="
  },
  doubleHeight: {
    src: "/images/double-height-living-room.jpg",
    alt: "Salón de doble altura con estructura ligera negra y abundante luz natural.",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EAB4QAAICAgIDAAAAAAAAAAAAAAECAAMREgQhFDFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AE33o9oWs4Et4gVVJdsyYcasOD8jmAUjQdSShnk7vop0UH3CYYbYwvUIrox//9k="
  }
} satisfies Record<string, SiteImage>;

export const interventionPhases = [
  {
    eyebrow: "Fase A · Diagnóstico Preexistente",
    title: "El estado compartimentado",
    body: "Planta original desarticulada con tabiquería densa, falsos techos oscurecidos y una iluminación natural severamente estrangulada en zonas nobles.",
    image: images.before,
    badge: "Estado 01 / 03 · Preexistente"
  },
  {
    eyebrow: "Fase B · Liberación Estructural",
    title: "Apertura estructural y luz",
    body: "Apeo milimétrico de muros de carga y apertura del eje principal este-oeste, permitiendo una ventilación cruzada y bañando de luz cenital la zona pública.",
    image: images.during,
    badge: "Estado 02 / 03 · Estructura y Luz"
  },
  {
    eyebrow: "Fase C · Resolución Arquitectónica",
    title: "El espacio final integrado",
    body: "Fusión fluida de cocina escultórica y salón noble articulada mediante mármol Calacatta pulido mate, roble natural enrasado y proporciones sosegadas.",
    image: images.after,
    badge: "Estado 03 / 03 · Entrega Final"
  }
] as const;

export const methodology = [
  {
    number: "01",
    title: "Demolición y consolidación estructural",
    body: "Despojamos la estructura de lo superfluo para revelar la esencia geométrica del espacio. Consolidamos forjados y rediseñamos las líneas de carga con ingeniería imperceptible."
  },
  {
    number: "02",
    title: "Instalaciones ocultas y climatización invisible",
    body: "Tecnología de aerotermia, suelo radiante refrescante, domótica integrada KNX y aislamiento acústico multicapa sin interferencias visuales ni rejillas aparentes."
  },
  {
    number: "03",
    title: "Materialidad noble y acabado artesanal",
    body: "Carpinterías a medida de suelo a techo, roble europeo enrasado, piedra natural de cantera milimétricamente ajustada e iluminación rasante calibrada a 2700K."
  }
] as const;

export const materialGallery = [
  { image: images.limestone, label: "01 / Isla Monolítica de Caliza", className: "galleryWide" },
  { image: images.travertine, label: "02 / Encuentro Travertino & Roble", className: "galleryMedium" },
  { image: images.bathroom, label: "03 / Baño Continuo en Microcemento", className: "galleryTall" },
  { image: images.pivotDoor, label: "04 / Carpintería Enrasada sin Jambas", className: "galleryTall" },
  { image: images.doubleHeight, label: "05 / Doble Altura y Luz Cenital", className: "galleryTall" }
] as const;

export const stats = [
  { value: "18", title: "Años de experiencia", text: "Dedicación exclusiva a la rehabilitación de alta gama en fincas clásicas." },
  { value: "+340", title: "Reformas integrales", text: "Viviendas entregadas llave en mano en Almagro, Salamanca y El Viso." },
  { value: "75", title: "Días medios garantizados", text: "Compromiso temporal cerrado con penalización contractual diaria." }
] as const;
