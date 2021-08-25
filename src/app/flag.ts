export class Flag {
    code: string;
    name: string;
    continent: string;

    constructor(code: string, name: string, continent: string) {
        this.code = code;
        this.name = name;
        this.continent = continent;
    }
}

export const flags : Flag[] = [
    new Flag('AD', 'Andorra', 'Europe'),
    new Flag('AL', 'Abania', 'Europe'),
    new Flag('AT', 'Austria', 'Europe'),
    new Flag('BA', 'Bosnia and Herzegovina', 'Europe'),
    new Flag('BE', 'Belgium', 'Europe'),
    new Flag('BG', 'Bulgaria', 'Europe'),
    new Flag('BY', 'Belarus', 'Europe'),
    new Flag('CH', 'Switzerland', 'Europe'),
    new Flag('CZ', 'Czech Republic', 'Europe'),
    new Flag('DE', 'Germany', 'Europe'),
    new Flag('DK', 'Denmark', 'Europe'),
    new Flag('EE', 'Estonia', 'Europe'),
    new Flag('ES', 'Spain', 'Europe'),
    new Flag('FI', 'Finland', 'Europe'),
    new Flag('FR', 'France', 'Europe'),
    new Flag('GB', 'United Kingdom', 'Europe'),
    new Flag('GE', 'Georgia', 'Europe'),
    new Flag('GR', 'Greece', 'Europe'),
    new Flag('HR', 'Croatia', 'Europe'),
    new Flag('IE', 'Ireland', 'Europe'),
    new Flag('IS', 'Iceland', 'Europe'),
    new Flag('IT', 'Italy', 'Europe'),
    new Flag('LI', 'Liechtenstein', 'Europe'),
    new Flag('LT', 'Lithuania', 'Europe'),
    new Flag('LU', 'Luxembourg', 'Europe'),
    new Flag('LV', 'Latvia', 'Europe'),
    new Flag('MC', 'Monaco', 'Europe'),
    new Flag('MD', 'Moldova', 'Europe'),
    new Flag('ME', 'Montenegro', 'Europe'),
    new Flag('MT', 'Malta', 'Europe'),
    new Flag('NL', 'Netherlands', 'Europe'),
    new Flag('NO', 'Norway', 'Europe'),
    new Flag('PL', 'Poland', 'Europe'),
    new Flag('PT', 'Portugal', 'Europe'),
    new Flag('RO', 'Romania', 'Europe'),
    new Flag('RS', 'Serbia', 'Europe'),
    new Flag('RU', 'Russia', 'Europe'),
    new Flag('SI', 'Slovenia', 'Europe'),
    new Flag('SK', 'Slovakia', 'Europe'),
    new Flag('SM', 'San Marino', 'Europe'),
    new Flag('UA', 'Ukraine', 'Europe'),
    new Flag('VA', 'Vatican City', 'Europe'),

    new Flag('AE', 'United Arab Emirates', 'Asia'),
    new Flag('CN', 'China', 'Asia'),
    new Flag('IN', 'India', 'Asia'),
    new Flag('IQ', 'Iraq', 'Asia'),
    new Flag('JP', 'Japan', 'Asia'),
    new Flag('KP', "Democratic People's Republic of Korea (North Korea)", 'Asia'),
    new Flag('KR', 'Republic of Korea (South Korea)', 'Asia'),
    new Flag('KZ', 'Kazakhstan', 'Asia'),
    new Flag('MN', 'Mongolia', 'Asia'),
    new Flag('NP', 'Nepal', 'Asia'),
    new Flag('TH', 'Thailand', 'Asia'),
    new Flag('TR', 'Turkey', 'Asia'),
    new Flag('VN', 'Vietnam', 'Asia'),

    new Flag('AR', 'Argentina', 'America'),
    new Flag('AM', 'Armenia', 'America'),
    new Flag('BR', 'Brazil', 'America'),
    new Flag('CA', 'Canada', 'America'),
    new Flag('CL', 'Chile', 'America'),
    new Flag('CO', 'Colombia', 'America'),
    new Flag('CU', 'Cuba', 'America'),
    new Flag('JM', 'Jamaica', 'America'),
    new Flag('MX', 'Mexico', 'America'),
    new Flag('PE', 'Peru', 'America'),
    new Flag('US', 'Unites States', 'America'),

    new Flag('AU', 'Australia', 'Ocenia'),
    new Flag('NZ', 'New Zealand', 'Ocenia'),
]