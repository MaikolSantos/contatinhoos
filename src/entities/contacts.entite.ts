import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entite.index";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User)
  user: User;
}

export { Contact };
