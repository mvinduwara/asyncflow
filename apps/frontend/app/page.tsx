// apps/frontend/app/page.tsx
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-blue-600">
          AsyncFlow
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto py-12 px-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Daily Standups</h1>
            <p className="text-gray-500 mt-1">Review team updates and blockers.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            + Record Update
          </button>
        </header>

        {/* Empty State Feed */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">No updates yet</h3>
          <p className="text-gray-500 mt-2 max-w-sm mx-auto">
            Your team hasn't posted any standups for today. Be the first to share your progress!
          </p>
        </div>
      </main>
    </div>
  );
}