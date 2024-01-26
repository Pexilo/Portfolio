import ActivityIcon from "@assets/discord/activity.svg";
import { User, createRandomizedMember, userList } from "@data/discord.data";
import { useEffect, useState } from "react";
import { stringCapitalize } from "src/utils/functions";

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
        <h3>
          EN LIGNE -{" "}
          {members.filter((member) => member.status !== "offline").length}
        </h3>
        {members
          .filter((member) => member.status !== "offline")
          .map((member) => printMember(member))}
        <h3>
          HORS LIGNE -{" "}
          {members.filter((member) => member.status === "offline").length}
        </h3>
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
      <div className="member-infos">
        <h4 style={member.status === "offline" ? { marginTop: "10%" } : {}}>
          {member.name}
        </h4>
        {member.activity?.description &&
          member.activity?.type &&
          member.status !== "offline" && (
            <span>
              <p>
                {stringCapitalize(member.activity.type)}{" "}
                <strong>{member.activity.description}</strong>
              </p>
              <img src={ActivityIcon} alt="activity" />
            </span>
          )}
      </div>
    </div>
  );
};

export default Members;
