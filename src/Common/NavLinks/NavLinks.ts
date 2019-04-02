interface INavLink {
  activeClass?: string;
  duration?: number;
  linkNodes?: INavLink[];
  smooth?: boolean;
  spy?: boolean;
  to: string;
}

const NavLinks: INavLink[] = [
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'home',
  },
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'mission',
  },
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'about',
  },
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'services',
  },
  {
    activeClass: 'current',
    duration: 500,
    linkNodes: [
      {
        to: 'seniors',
      },
      {
        to: 'team',
      },
    ],
    smooth: true,
    spy: true,
    to: 'meet',
  },
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'donate',
  },
  {
    activeClass: 'current',
    duration: 500,
    smooth: true,
    spy: true,
    to: 'contact',
  },
];

export default NavLinks;
