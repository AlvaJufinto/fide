/** @format */

import {
	useEffect,
	useRef,
} from 'react';

import useTyping from '@/hooks/useTyping';
import type { ChatMessage } from '@/interfaces/debate';

export default function ChatLog({ messages }: { messages: ChatMessage[] }) {
	const bottomRef = useRef<HTMLDivElement>(null);

	const lastMessage = messages[messages.length - 1];
	const typedLastText = useTyping(lastMessage?.text || "", 20);

	// Auto-scroll to latest message
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		// FIX 4: fixed-height scrollable chat area, no overflow outside container
		<div className="flex flex-col gap-3 overflow-y-auto h-full px-4 py-3">
			{messages.map((msg, i) => {
				const isLast = i === messages.length - 1;
				const displayText = isLast ? typedLastText : msg.text;

				if (msg.from === "boss") {
					return (
						<div key={i} className="flex items-start gap-2 max-w-[80%]">
							<div className="border-2 border-red-500 bg-red-100 px-3 py-2 lg text-sm">
								<span className="font-bold text-red-700 block text-xs mb-1">
									Martin Luther
								</span>
								{displayText}
							</div>
						</div>
					);
				}
				if (msg.from === "player") {
					return (
						<div
							key={i}
							className="flex items-start gap-2 max-w-[80%] ml-auto flex-row-reverse"
						>
							<div className="border-2 border-blue-500 bg-blue-100 px-3 py-2 lg text-sm">
								<span className="font-bold text-blue-700 block text-xs mb-1 text-right">
									You
								</span>
								{displayText}
							</div>
						</div>
					);
				}
				// feedback
				return (
					<div
						key={i}
						className="mx-auto border-2 border-yellow-500 bg-yellow-100 px-3 py-2 lg text-sm text-center max-w-[90%]"
					>
						<span className="font-bold text-yellow-700 block text-xs mb-1">
							Judge's Feedback
						</span>
						{displayText}
					</div>
				);
			})}
			<div ref={bottomRef} />
		</div>
	);
}
