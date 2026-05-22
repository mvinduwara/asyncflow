// apps/frontend/src/components/StandupForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StandupForm({
  userId,
  workspaceId,
  teamId,
}: {
  userId: string;
  workspaceId: string;
  teamId: string;
}) {
  const [transcript, setTranscript] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transcript.trim()) return;
    
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3002/standups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          workspaceId,
          teamId,
          type: "TEXT",
          transcript,
        }),
      });

      if (res.ok) {
        setTranscript(""); // Clear the input
        router.refresh();  // Force Next.js to re-fetch the server data instantly!
      }
    } catch (error) {
      console.error("Failed to submit standup:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Post your update</h2>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="What did you do yesterday? What are you doing today? Any blockers?"
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
        rows={3}
        disabled={isSubmitting}
      />
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting || !transcript.trim()}
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Submit Update"}
        </button>
      </div>
    </form>
  );
}