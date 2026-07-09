"use client";

import { useEffect, useState } from "react";

export default function CommentSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  async function fetchComments(pageNumber = 1, reset = false) {
    try {
      setLoadingComments(true);

      const res = await fetch(`/api/comment?page=${pageNumber}`);
      const data = await res.json();

      if (reset) {
        setComments(data.comments);
      } else {
        setComments((prev) => [...prev, ...data.comments]);
      }

      setHasMore(data.hasMore);
      setPage(pageNumber);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingComments(false);
    }
  }

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          comment,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      setName("");
      setEmail("");
      setComment("");

      // Reload first page so newest comment appears at the top
      await fetchComments(1, true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchComments(1, true);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold text-primary">Comment Section</h1>

      <p className="mb-8 text-gray-600">
        Share your thoughts, suggestions, or feedback about the Quran
        Dictionary.
      </p>

      {/* Form */}

      <div className="mb-8 rounded-lg bg-white p-6 shadow">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label className="mb-2 block font-medium">Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Comment</label>

            <textarea
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </div>

      {/* Comments */}

      {comments.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center">
          <p className="text-gray-500">
            No comments yet. Be the first to leave a comment.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-semibold">Recent Comments</h2>

          {comments.map((item) => (
            <div key={item._id} className="mb-4 rounded-lg border p-4">
              <h3 className="font-semibold">{item.name}</h3>

              <p className="mb-2 text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p>{item.comment}</p>
            </div>
          ))}

          {hasMore && (
            <div className="mt-6 text-center">
              <button
                onClick={() => fetchComments(page + 1)}
                disabled={loadingComments}
                className="rounded-lg border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingComments ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
