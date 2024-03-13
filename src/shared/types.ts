//enums are super usefull when you have a set of strings you want to choose from. 

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contacus",
}

export interface BenefitType {
  icon: JSX.Element; 
  title: string; 
  description: string; 
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

// adding a ? after an element in the interface makes it optional. 