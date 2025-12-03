"use client";
import { Trophy, TrendingUp, Target, Award } from "lucide-react";

const fightRecord = [
  {
    id: 1,
    opponent: "Mike Johnson",
    event: "WKA USA Regional Championship",
    date: "2024-01-05",
    result: "Win",
    method: "Decision (Unanimous)",
    round: "-",
  },
  {
    id: 2,
    opponent: "Carlos Rodriguez",
    event: "Holiday Showdown 2023",
    date: "2023-12-15",
    result: "Win",
    method: "TKO",
    round: "2",
  },
  {
    id: 3,
    opponent: "James Wilson",
    event: "Fall Classic",
    date: "2023-10-20",
    result: "Win",
    method: "Decision (Split)",
    round: "-",
  },
  {
    id: 4,
    opponent: "David Lee",
    event: "Summer Showdown",
    date: "2023-07-15",
    result: "Loss",
    method: "Decision (Unanimous)",
    round: "-",
  },
  {
    id: 5,
    opponent: "Ryan Martinez",
    event: "Spring Tournament",
    date: "2023-04-10",
    result: "Win",
    method: "KO",
    round: "1",
  },
];

export default function RecordPage() {
  const wins = fightRecord.filter((f) => f.result === "Win").length;
  const losses = fightRecord.filter((f) => f.result === "Loss").length;
  const draws = fightRecord.filter((f) => f.result === "Draw").length;
  const winRate = Math.round((wins / fightRecord.length) * 100);
  const finishes = fightRecord.filter(
    (f) => f.result === "Win" && (f.method.includes("KO") || f.method.includes("TKO") || f.method.includes("Submission"))
  ).length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Fight Record</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{wins}-{losses}-{draws}</p>
              <p className="text-sm text-gray-500">W-L-D</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{winRate}%</p>
              <p className="text-sm text-gray-500">Win Rate</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{finishes}</p>
              <p className="text-sm text-gray-500">Finishes</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{fightRecord.length}</p>
              <p className="text-sm text-gray-500">Total Fights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Record Display */}
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="text-center">
          <p className="text-5xl font-bold text-green-600">{wins}</p>
          <p className="text-gray-500 font-medium">WINS</p>
        </div>
        <div className="text-4xl text-gray-300">-</div>
        <div className="text-center">
          <p className="text-5xl font-bold text-red-600">{losses}</p>
          <p className="text-gray-500 font-medium">LOSSES</p>
        </div>
        <div className="text-4xl text-gray-300">-</div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-400">{draws}</p>
          <p className="text-gray-500 font-medium">DRAWS</p>
        </div>
      </div>

      {/* Fight History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Fight History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opponent</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Round</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fightRecord.map((fight) => (
                <tr key={fight.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        fight.result === "Win"
                          ? "bg-green-100 text-green-700"
                          : fight.result === "Loss"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {fight.result}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-900">{fight.opponent}</td>
                  <td className="px-4 py-4 text-gray-600">{fight.event}</td>
                  <td className="px-4 py-4 text-gray-600">{fight.date}</td>
                  <td className="px-4 py-4 text-gray-600">{fight.method}</td>
                  <td className="px-4 py-4 text-gray-600">{fight.round}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
