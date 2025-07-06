import Image from "next/image"
import { content } from "@/data/content"

interface IntroContentProps {
  firstName: string
}

export const IntroContent = ({ firstName }: IntroContentProps) => (
  <div className="flex flex-col items-center">
    <Image src="/images/video-preview.png" height={150} width={150} alt="Welcome Video Preview" />
    <div className="leading-normal space-y-3 mt-[10px] mb-8 text-ash-900">
      <p>Dear {firstName},</p>
      <p>{content.intro}</p>
      <p>{content.howItWorks.sentence}</p>
      <ul className="list-none space-y-2 pl-3">
        {content.howItWorks.points.map((point, idx) => {
          const key = `${point.substring(0, 2)}-${idx}`
          return (
            <li
              key={key}
              className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[11px] before:h-0.75 before:w-0.75 before:bg-ash-900"
            >
              {point}
            </li>
          )
        })}
      </ul>
      <p>{content.close}</p>
      <p>Sincerely,</p>
      <p>Salma & the Ffern team</p>
    </div>
  </div>
)
