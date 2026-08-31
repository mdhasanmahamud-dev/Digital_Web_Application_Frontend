// import { useContact } from "../../context/ContactProvider";
// import { useProject } from "../../context/ProjectProvider";

// export default function DashboardHome() {
//   const {contactStats} = useContact();
//   const {projectsCount} = useProject()
//   const stats = [
//     {
//       title: "Total Projects",
//       value: projectsCount,
//       growth: "+12% this month",
//     },
//     {
//       title: "Total Contacts",
//       value: contactStats?.totalContact,
//       growth: "+8% this week",
//     },
//     {
//       title: "Unread Messages",
//       value: contactStats?.totalUnread,
//       growth: "Needs attention",
//     },
//     {
//       title: "Revenue",
//       value: "$12,400",
//       growth: "+15% this month",
//     },
//   ];

//   const recentActivities = [
//     "New contact message received",
//     "A new user registered",
//     "Contact message marked as read",
//     "Payment successfully completed",
//   ];

//   return (
//     <div className="min-h-screen text-white p-6 md:p-8 rounded-3xl">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
//         {stats.map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#0d1b3d] border border-white/10 rounded-2xl p-6 hover:border-orange-400/40 transition-all duration-300"
//           >
//             <p className="text-gray-400 text-sm">{item.title}</p>

//             <h2 className="text-3xl font-bold mt-3">{item.value}</h2>

//             <p className="text-green-400 text-sm mt-3">{item.growth}</p>
//           </div>
//         ))}
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//         {/* Left Side */}
//         <div className="xl:col-span-2 bg-[#0d1b3d] border border-white/10 rounded-2xl p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Analytics</h2>
//           </div>

//           {/* Fake Chart */}
//           <div className="h-80 flex items-end gap-4">
//             {[40, 70, 55, 90, 60, 80, 50].map((height, index) => (
//               <div
//                 key={index}
//                 className="flex-1 bg-orange-400/80 hover:bg-orange-400 rounded-t-xl transition-all duration-300"
//                 style={{ height: `${height}%` }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="space-y-6">
//           {/* Activity */}
//           <div className="bg-[#0d1b3d] border border-white/10 rounded-2xl p-6">
//             <h2 className="text-2xl font-bold mb-5">Recent Activity</h2>

//             <div className="space-y-4">
//               {recentActivities.map((activity, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 border-b border-white/5 pb-4"
//                 >
//                   <div className="w-3 h-3 rounded-full bg-orange-400 mt-2"></div>

//                   <p className="text-gray-300 text-sm leading-6">
//                     {activity}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Profile Card */}
//           <div className="bg-linear-to-br from-orange-400 to-yellow-300 text-black rounded-2xl p-6">
//             <p className="text-sm font-semibold">Admin Panel</p>

//             <h2 className="text-2xl font-bold mt-2">Hasan Mahamud</h2>

//             <p className="text-sm mt-3 opacity-80">
//               Manage users, contacts, analytics and monitor your business from one dashboard.
//             </p>

//             <button className="mt-5 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#111] transition-all duration-300">
//               View Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useContact } from "../../context/ContactProvider";
import { useProject } from "../../context/ProjectProvider";
import { useUser } from "../../context/UserProvider";

export default function DashboardHome() {
  const { contactStats } = useContact();
  const { projectsCount } = useProject();
  const { user, logoutUser } = useUser();

  console.log(user);

  // =========================
  // Dynamic Chart Data
  // =========================
  const chartData = [
    {
      name: "Projects",
      value: projectsCount || 0,
    },
    {
      name: "Contacts",
      value: contactStats?.totalContact || 0,
    },
    {
      name: "Unread",
      value: contactStats?.totalUnread || 0,
    },
  ];

  // =========================
  // Dashboard Stats
  // =========================
  const stats = [
    {
      title: "Total Projects",
      value: projectsCount || 0,
      growth: "Current total",
    },
    {
      title: "Total Contacts",
      value: contactStats?.totalContact || 0,
      growth: "Current total",
    },
    {
      title: "Unread Messages",
      value: contactStats?.totalUnread || 0,
      growth:
        contactStats?.totalUnread > 0 ? "Needs attention" : "All messages read",
    },
    {
      title: "Revenue",
      value: "$12,400",
      growth: "+15% this month",
    },
  ];

  // =========================
  // Recent Activities
  // =========================
  const recentActivities = [
    "New contact message received",
    "A new user registered",
    "Contact message marked as read",
    "Payment successfully completed",
  ];

  return (
    <div className="min-h-screen text-white p-6 md:p-8 rounded-3xl">
      {/* =========================
          Stats Cards
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-card-primary
              border border-primary
              rounded-2xl
              p-6
              hover:bg-card-hover-primary
              transition-all
              duration-300
            "
          >
            <p className="text-white-muted text-sm">{item.title}</p>

            <h2 className="text-3xl font-bold mt-3">{item.value}</h2>

            <p
              className={`text-sm mt-3 ${
                item.title === "Unread Messages" &&
                contactStats?.totalUnread > 0
                  ? "text-orange-400"
                  : "text-green-400"
              }`}
            >
              {item.growth}
            </p>
          </div>
        ))}
      </div>

      {/* =========================
          Main Grid
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            Analytics
        ========================== */}
        <div
          className="
            xl:col-span-2
            bg-card-primary
            border border-primary
            rounded-2xl
            p-6
          "
        >
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Analytics</h2>

              <p className="text-sm text-white-muted mt-1">
                Overview of your current statistics
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />

              <span className="text-sm text-white-muted">Current</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 5,
                  left: 5,
                  bottom: 0,
                }}
              >
                {/* Grid */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#003060"
                  vertical={false}
                />

                {/* X Axis */}
                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 13,
                  }}
                />

                {/* Y Axis */}
                <YAxis
                  allowDecimals={false}
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 12,
                  }}
                />

                {/* Tooltip */}
                <Tooltip
                  cursor={{
                    fill: "rgba(240, 160, 16, 0.08)",
                  }}
                  contentStyle={{
                    backgroundColor: "#07122a",
                    border: "1px solid #003060",
                    borderRadius: "12px",
                    color: "#ffffff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  }}
                  labelStyle={{
                    color: "#F0A010",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                  itemStyle={{
                    color: "#ffffff",
                  }}
                />

                {/* Bars */}
                <Bar
                  dataKey="value"
                  fill="#F0A010"
                  radius={[10, 10, 0, 0]}
                  barSize={65}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* =========================
            Right Side
        ========================== */}
        <div className="space-y-6">
          {/* =========================
              Recent Activity
          ========================== */}
          <div
            className="
              bg-card-primary
              border border-primary
              rounded-2xl
              p-6
            "
          >
            <h2 className="text-2xl font-bold mb-5">Recent Activity</h2>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-white/5
                      pb-4
                    "
                >
                  <div
                    className="
                        w-3
                        h-3
                        rounded-full
                        bg-accent
                        mt-2
                        shrink-0
                      "
                  />

                  <p
                    className="
                        text-white-soft
                        text-sm
                        leading-6
                      "
                  >
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              Profile Card
          ========================== */}
          <div
            className="
              bg-linear-to-br
              from-[#F0A010]
              to-yellow-300
              text-black
              rounded-2xl
              p-6
            "
          >
            <p className="text-sm font-semibold capitalize">{user?.role}</p>

            <h2 className="text-2xl font-heading font-bold mt-2 capitalize">{user?.name}</h2>

            <p className="text-sm font-heading mt-3 leading-6">
              Manage your dashboard, monitor activities, and keep everything
              organized from one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
