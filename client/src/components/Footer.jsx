import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto '>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              RoadTo
              <span className='px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                AC
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Informatii ajutatoare' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://admitere.ac.upt.ro/licenta/admitere/pregatire-pentru-examenul-de-admitere/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Pregatire pentru admitere
                </Footer.Link>
                <Footer.Link
                  href='https://ac.upt.ro/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Site-ul AC
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Urmareste-ne' />
              <Footer.LinkGroup col>
                
                <Footer.Link
                  href='https://github.com/Flaviusgit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link 
                    href='https://discord.gg/tRdA4bfQ'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                  Discord
                </Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Politica de confidențialitate</Footer.Link>
                <Footer.Link href='#'>Termeni &amp; Conditii</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="RoadToAC"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/flavius.carpean/' icon={BsFacebook}/> 
            <Footer.Icon href='https://www.instagram.com/flavius.carpean/' icon={BsInstagram}/>
            <Footer.Icon href='https://discord.gg/9BsVBxwh' icon={BsDiscord}/>
            <Footer.Icon href='https://github.com/Flaviusgit' icon={BsGithub}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}