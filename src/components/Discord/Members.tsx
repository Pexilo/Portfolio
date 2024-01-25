import { User, createRandomizedMember, userList } from "@data/discord.data";
import { useEffect, useState } from "react";

const memberCount = 5;
const Members = ({
  toggleMembers,
}: Readonly<{
  toggleMembers: boolean;
}>) => {
  const [members, setMembers] = useState<User[]>(userList);

  useEffect(() => {
    let newMembers: User[] = [...members];
    for (let i = 0; i < memberCount; i++) {
      newMembers.push(createRandomizedMember());
    }
    setMembers(newMembers);
  }, []);

  return (
    toggleMembers && (
      <div className="members dark-theme">
        <h3>EN LIGNE - {members.length}</h3>
        {members
          .filter((member) => member.status !== "offline")
          .map((member) => printMember(member))}
        <h3>HORS LIGNE - {members.length}</h3>
        {members
          .filter((member) => member.status === "offline")
          .map((member) => printMember(member))}
      </div>
    )
  );
};

const printMember = (member: User) => {
  return (
    <div className="member" key={member.name + member.tag}>
      <div className="member-avatar">
        <img
          src={member.avatar}
          alt={member.name}
          style={member.status === "offline" ? { opacity: 0.5 } : {}}
        />
        <span className={`member-status ${member.status}`}>
          {["dnd", "offline"].includes(member.status) && (
            <span className={`status-icon-${member.status}`} />
          )}
        </span>
      </div>
      <div className="member-name">{member.name}</div>
    </div>
  );
};

export default Members;
