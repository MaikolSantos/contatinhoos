import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 125, unique: true })
  name: string;

  @Column({ type: "varchar", length: 127 })
  email: string;

  @Column({ type: "varchar", length: 19 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}

export { Contact };
