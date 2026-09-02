import React from "react";
import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import TeamMemberTable from "./TeamMemberTable";
import AddMemberButton from "./AddMemberButton";
import { useTeam } from "../../../context/TeamMembersProvider";

const TeamMembers = () => {
  const { team, teamLoading, deleteMember } = useTeam();
  return (
    <div>
      <DashboardTitle
        title="টিম মেম্বারস"
        subtitle="এক জায়গা থেকে সব টিম মেম্বার, রোল এবং পারমিশন ম্যানেজ করুন।"
      />
      <AddMemberButton team={team}/>
      <TeamMemberTable
        team={team}
        teamLoading={teamLoading}
        deleteMember={deleteMember}
      />
    </div>
  );
};

export default TeamMembers;
