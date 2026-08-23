import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";

interface LocationLinkProps {
  locations: typeof RESUME_DATA.locations;
}

function LocationLink({ locations }: LocationLinkProps) {
  return (
    <p className="resume-details max-w-md items-center text-pretty font-mono text-foreground">
      <span className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 align-baseline leading-none">
        <GlobeIcon className="size-3 text-foreground/80" aria-hidden="true" />
        {locations.map((location, index) => (
          <span
            key={location.label}
            className="inline-flex items-center gap-x-1.5"
          >
            {index > 0 && <span className="text-foreground/50">+</span>}
            <a
              className="hover:underline"
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`location: ${location.label}`}
            >
              {location.label}
            </a>
          </span>
        ))}
      </span>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="resume-body flex gap-x-1 pt-1 font-mono text-foreground/80 print:hidden"
      role="list"
      aria-label="contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label="personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label="email"
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="resume-details hidden font-mono text-foreground/80 print:flex print:flex-wrap print:items-center print:gap-x-4"
      aria-label="print contact information"
    >
      {personalWebsiteUrl && (
        <a
          href={personalWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="personal website"
        >
          <GlobeIcon className="size-4 text-foreground/80" />
        </a>
      )}
      {contact.email && (
        <a
          href={`mailto:${contact.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`email: ${contact.email}`}
        >
          <MailIcon className="size-4 text-foreground/80" />
        </a>
      )}
      {contact.social.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <social.icon className="size-4 text-foreground/80" />
        </a>
      ))}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header({
  nameOverride,
  aboutOverride,
}: {
  nameOverride?: string;
  aboutOverride?: string;
} = {}) {
  const displayName = nameOverride ?? RESUME_DATA.name;
  const displayAbout = aboutOverride ?? RESUME_DATA.about;

  return (
    <header className="flex items-center justify-between gap-4 print:gap-3">
      <div className="flex-1 space-y-1.5">
        <h1 className="resume-name" id="resume-name">
          {displayName}
        </h1>
        {displayAbout ? (
          <p
            className="resume-body max-w-2xl text-pretty font-mono text-foreground/80"
            aria-labelledby="resume-name"
          >
            {displayAbout}
          </p>
        ) : null}

        <LocationLink locations={RESUME_DATA.locations} />

        <ContactButtons
          contact={RESUME_DATA.contact}
          // personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />

        <PrintContact
          contact={RESUME_DATA.contact}
          // personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28 print:size-20" aria-hidden="true">
        <AvatarImage
          alt={`${displayName}'s profile picture`}
          src={RESUME_DATA.avatarUrl}
          className="scale-110 object-cover object-center"
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
