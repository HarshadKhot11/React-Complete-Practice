
// // import { useState, useOptimistic, useTransition } from "react";

// // export function UseOptimistic() {

// //     const [comments, setComments] = useState([]);
// //     const [isPending, startTransition] = useTransition();

// //     const [optimisticComments, addOptimisticComment] =
// //         useOptimistic(comments, (currentComments, newComment) => [
// //             ...currentComments,
// //             newComment
// //         ]);

// //     async function handleSubmit(e) {
// //         e.preventDefault();

// //         const form = e.target;
// //         const input = form.elements.comment;
// //         const text = input.value.trim();

// //         if (!text) return;

// //         input.value = "";

// //         startTransition(async () => {
// //             addOptimisticComment({
// //                 id: crypto.randomUUID(),
// //                 text,
// //                 pending: true
// //             });

// //             try {
// //                 const response = await fetch("/api/comments", {
// //                     method: "POST",
// //                     headers: {
// //                         "Content-Type": "application/json"
// //                     },
// //                     body: JSON.stringify({ text })
// //                 });

// //                 if (!response.ok) {
// //                     throw new Error("Failed to save comment");
// //                 }

// //                 const savedComment = await response.json();

// //                 setComments(current => [
// //                     ...current,
// //                     savedComment
// //                 ]);
// //             } catch (error) {
// //                 alert("Comment save झाला नाही. पुन्हा प्रयत्न कर.");
// //             }
// //         });
// //     }

// //     return (
// //         <>
// //             <h3>Comments</h3>

// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     name="comment"
// //                     placeholder="Write a comment..."
// //                 />
// //                 <button type="submit">Submit</button>
// //             </form>

// //             {optimisticComments.map(comment => (
// //                 <p key={comment.id}>
// //                     {comment.text}
// //                     {comment.pending && " (Saving...)"}
// //                 </p>
// //             ))}

// //             {isPending && <p>Saving comment...</p>}
// //         </>
// //     );
// // }

// import { useOptimistic, useState, startTransition } from "react";

// export function UseOptimistic() {

//     const [comments, setComments] = useState([]);

//     const [optimisticComments, addOptimisticComment] =
//         useOptimistic(comments, (currentComments, newComment) => {
//             return [...currentComments, newComment];
//         });

//     async function handleSubmit(e) {
//         e.preventDefault();

//         const form = e.target;
//         const input = form.elements.comment;
//         const comment = input.value.trim();

//         if (!comment) return;

//         input.value = "";

//         startTransition(async () => {
//             addOptimisticComment(comment);

//             await new Promise(resolve => setTimeout(resolve, 3000));

//             setComments(current => [...current, comment]);
//         });
//     }

//     return (
//         <>
//             <h3>Comments</h3>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     name="comment"
//                     placeholder="Write a comment..."
//                 />

//                 <button type="submit">Submit</button>
//             </form>

//             {optimisticComments.map((comment, index) => (
//                 <p key={index}>{comment}</p>
//             ))}
//         </>
//     );
// }


import { useOptimistic, useState } from "react";

export function UseOptimistic() {

    const [likes, setLikes] = useState(0);

    const [optimisticLikes, addOptimisticLike] =
        useOptimistic(likes, (currentLikes, newLike) => {
            return currentLikes + newLike;
        });

    async function handleLike() {
        addOptimisticLike(1);

        await new Promise(resolve => setTimeout(resolve, 2000));
        setLikes(likes + 1);
    }

    return (
        <>
            <p>Likes: {optimisticLikes}</p>

            <button onClick={handleLike}>
                Like
            </button>
        </>
    );
}
