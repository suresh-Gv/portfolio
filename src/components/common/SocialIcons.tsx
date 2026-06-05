import { IconButton, Tooltip } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import type { SocialLink } from '../../types';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
};

interface SocialIconsProps {
  links: SocialLink[];
  size?: 'small' | 'medium';
}

export default function SocialIcons({ links, size = 'medium' }: SocialIconsProps) {
  const iconSize = size === 'small' ? 18 : 22;

  return (
    <>
      {links.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        if (!Icon) return null;
        return (
          <Tooltip key={link.name} title={link.name}>
            <IconButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              size={size}
              sx={{
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Icon size={iconSize} />
            </IconButton>
          </Tooltip>
        );
      })}
    </>
  );
}
