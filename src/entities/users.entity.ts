import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 125 })
  name: string;

  @Column({ type: "varchar", length: 127, unique: true })
  email: string;

  @Column({ type: "varchar", length: 19 })
  phone: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user, { onDelete: "CASCADE" })
  contacts: Contact[];
}

export { User };
