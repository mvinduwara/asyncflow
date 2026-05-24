import React from 'react';
import StandupForm from '../components/StandupForm';

const USER_ID = "a1b2c3d4-1234-5678-abcd-1234567890ab"; 
const WORKSPACE_ID = "e5f6g7h8-1234-5678-abcd-1234567890ab"; 
const TEAM_ID = "i9j0k1l2-1234-5678-abcd-1234567890ab"; 

async function getStandups() {
  try {
    const res = await fetch(`http://localhost:3002/standups/team/${TEAM_ID}`, {
      cache: 'no-store', 
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch standups:", error);
    return [];
  }
}

export default async function Dashboard() {
  const standups = await getStandups();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-blue-600">
          AsyncFlow
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
            DE
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-12 px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Daily Standups</h1>
          <p className="text-gray-500 mt-1">Review team updates and blockers.</p>
        </header>

        {/* 1. Mount the interactive client form */}
        <StandupForm 
          userId={USER_ID} 
          workspaceId={WORKSPACE_ID} 
          teamId={TEAM_ID} 
        />

        <h2 className="text-xl font-bold mb-4">Team Updates</h2>
        {standups.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
            <p className="text-gray-500 max-w-sm mx-auto">
              No updates yet. Be the first to share your progress!
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {standups.map((standup: any) => (
              <div key={standup.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-semibold text-gray-900">{standup.user.fullName}</div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-green-100 text-green-800 rounded-full">
                    {standup.status}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{standup.transcript}</p>
                <div className="mt-4 text-xs text-gray-400">
                  {new Date(standup.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}