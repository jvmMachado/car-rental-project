interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO);
  fintByName(name: string);
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
