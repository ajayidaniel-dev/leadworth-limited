"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/app/lib/sanity.client";
import { groq } from "next-sanity";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface Props {
  id: string;
}

interface CommentForm {
  name: string;
  email: string;
  CommentMessage: string;
}

const Comment = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [comment, setComments] = useState<CommentForm>({
    name: "",
    email: "",
    CommentMessage: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [commentBox, setCommentBox] = useState<any[]>([]);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const fetchComments = async () => {
      const query = groq`*[_type=="comments" && id==$id && approved==true]{...}`;
      const data = await client.fetch(query, { id });
      setCommentBox(data);
    };

    fetchComments();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComments((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await client.create({
        _type: "comments",
        name: comment.name,
        email: comment.email,
        id: id,
        commentmessage: comment.CommentMessage,
      });

      setSubmitStatus("success");
      setComments({
        name: "",
        email: "",
        CommentMessage: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Failed to submit comment:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#F45625]/10">
      {commentBox.length > 0 && (
        <div className="p-6 border-b border-[#F45625]/10">
          <div className="flex items-center gap-2 mb-6">
            <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-[#F45625]" />
            <h2 className="text-xl font-bold text-[#130F45]">
              Comments ({commentBox.length})
            </h2>
          </div>

          <div className="space-y-6">
            {commentBox.map((comment) => (
              <div key={comment._id} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#F45625]/10 flex items-center justify-center">
                    <span className="text-[#F45625] font-bold text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#130F45]">
                      {comment.name}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(comment._createdAt))}
                    </span>
                  </div>
                  <p className="text-gray-700 bg-[#FFF7F3] rounded-lg px-4 py-2">
                    {comment.commentmessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#130F45] mb-6">
          Leave a comment
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="CommentMessage"
              className="block text-sm font-medium text-[#130F45] mb-2"
            >
              Your comment *
            </label>
            <textarea
              id="CommentMessage"
              name="CommentMessage"
              rows={4}
              value={comment.CommentMessage}
              onChange={handleInputChange}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 rounded-lg border border-[#F45625]/20 bg-white text-[#130F45] placeholder-gray-400 focus:outline-none focus:border-[#F45625] focus:ring-2 focus:ring-[#F45625]/20 transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#130F45] mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={comment.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-[#F45625]/20 bg-white text-[#130F45] placeholder-gray-400 focus:outline-none focus:border-[#F45625] focus:ring-2 focus:ring-[#F45625]/20 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#130F45] mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={comment.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#F45625]/20 bg-white text-[#130F45] placeholder-gray-400 focus:outline-none focus:border-[#F45625] focus:ring-2 focus:ring-[#F45625]/20 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto px-6 py-3 rounded-lg font-bold text-white transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#F45625]/30 focus:ring-offset-2
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#F45625] hover:bg-[#e04a1f] active:scale-95"
                }
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Comment"
              )}
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200">
              Your comment has been submitted and will be visible after
              approval.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
              There was an error submitting your comment. Please try again.
            </div>
          )}

          <p className="text-sm text-gray-500 mt-2">
            Your email address will not be published. Required fields are marked
            with an asterisk (*).
          </p>
        </form>
      </div>
    </div>
  );
};

export default Comment;
