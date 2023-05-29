import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entite";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export { User };
