import Link from 'next/link'

const ResumeLink = () => (
  <Link href="/resume.pdf" passHref>
    <a target="_blank" rel="noopener noreferrer">Download My Resume</a>
  </Link>
);

export default ResumeLink;