import Image from "next/image";
import Testimonials from "./components/testimonials";
import ContactForm from "./components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <header className="flex sm:absolute z-50 w-full top-0 justify-between items-center p-6 sm:p-8">
        <div className="flex items-center justify-center space-x-4 w-full sm:w-auto mr-12">
          <Image src="/logo.png" width={52} height={52} alt="Logo" />
          <a
            href="#main"
            className="text-black text-xl cursor-pointer relative group font-bold"
          >
            AmSecretariat
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-1000 group-hover:w-0"></span>
          </a>
        </div>

        <nav className="hidden sm:flex space-x-16 text-xl">
          <a href="#main" className="text-black cursor-pointer relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#aboutus"
            className="text-black cursor-pointer relative group"
          >
            À propos
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#service"
            className="text-black cursor-pointer relative group"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-black cursor-pointer relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="hidden sm:flex items-center">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="sm:hidden fixed bottom-16 justify-center right-4 z-50">
          <a
            href="tel:+33612345678"
            className="bg-pink-500 text-white p-4 pr-6 rounded-full shadow-lg flex items-center justify-center space-x-2 transform transition-transform hover:scale-105 active:scale-95"
            aria-label="Appeler la secrétaire"
          >
            <span className="text-xl">📞</span>
            <span className="text-sm font-medium">Appelez-nous</span>
          </a>
        </div>
      </header>

      <main className="sm:min-h-screen space-x-96 flex flex-col pt-0 sm:justify-start sm:relative p-8">
        <div className="flex flex-col items-center space-y-4 p-4 sm:items-start sm:pl-32 relative sm:top-48">
          <h1 className="text-black text-center text-xl sm:text-4xl sm:text-start">
            Expert indépendant, à votre <br />
            service pour optimiser vos tâches <br />
            administratives à distance.
          </h1>
          <p className="text-black text-center text-xs sm:text-xl sm:text-start">
            Confiez vos tâches complexes à notre <br />
            assistante virtuelle, pour un gain de temps et une gestion sans
            stress.
          </p>
          <div className="flex flex-col-2 space-x-10 pt-10">
            <a href="#contact">
              <Image
                className="sm:w-[300px] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-3 active:scale-95"
                src="/button.svg"
                width={170}
                height={170}
                alt="Demander un devis"
              />
            </a>
            <a href="#aboutus">
              <button className="relative pink text-white text-sm sm:text-lg shadow-lg sm:py-4 sm:px-10 p-2 rounded-full overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:bg-pink-400">
                <span className="absolute inset-0 bg-pink-300 opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
                À propos
              </button>
            </a>
          </div>
          <div className="flex mb-10">
            <Testimonials></Testimonials>
          </div>
        </div>

        <div className="flex sm:absolute sm:right-[300px] sm:top-52">
          <Image
            src="/photo4.png"
            width={500}
            height={500}
            alt=""
            className="rounded-xl"
          />
        </div>
      </main>

      <section id="aboutus" className="min-h-screen bg-white">
        <div className="flex flex-col justify-center items-center sm:flex-row  sm:space-x-44 p-1 sm:p-40">
          <Image
            className="transition-transform duration-300 ease-in-out hover:translate-y-[-20px]"
            src="/group.svg"
            width={500}
            height={500}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-pink-300 text-lg sm:text-3xl mb-8">À propos</p>
            <h1 className="text-black leading-none sm:text-xl sm:!leading-relaxed font-thin">
              <span className="sm:text-3xl text-lg font-bold">
                Notre métier est de <br />
                vous rendre la vie plus facile <br />
                et plus confortable
              </span>{" "}
              <br />
              <br />
              Nous mettons à votre disposition des services adaptés pour alléger
              vos tâches <br />
              et vous permettre de vous concentrer sur ce qui compte vraiment.
              <br />
              <br />
              <span className="sm:text-2xl font-bold">
                01. Comment pouvons-nous alléger vos tâches administratives ?
              </span>{" "}
              <br />
              <br />
              Nous prenons en charge la gestion de vos documents, vos plannings
              et toutes <br />
              vos tâches administratives pour vous offrir plus de liberté et
              d’efficacité.
              <br />
              <br />
              <span className="sm:text-2xl font-bold">
                02. Pourquoi choisir notre expertise ?
              </span>{" "}
              <br />
              <br />
              En nous confiant votre secrétariat, vous bénéficiez de services
              sur mesure, <br />
              d’un gain de temps précieux et de la tranquillité d’esprit, tout
              en optimisant la gestion de <br /> votre entreprise.
            </h1>
          </div>
        </div>
      </section>
      <section
        id="service"
        className="min-h-screen flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8 p-20"
      >
        <div className="sm:w-2/4 flex flex-col text-center sm:text-start   sm:p-20">
          <p className="text-pink-300 text-xl sm:text-3xl mb-8">Nos services</p>
          <h1 className="text-black text-xl sm:text-2xl sm:!leading-loose font-thin">
            <span className="sm:text-3xl sm:text font-bold">
              Nous fournissons les meilleurs services d&apos;assistant virtuel
            </span>{" "}
            <br />
            Notre expertise vous permet de vous concentrer sur vos priorités
            tout en garantissant une gestion efficace et professionnelle.
            <div className="flex mt-4">
              <span className="sm:text-xl font-bold sm:!leading-loose flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g fill="none" stroke="#000">
                    <path d="M14.049 5.54a1 1 0 0 1 1.071.443l.994 1.587a1 1 0 0 0 .316.316l1.587.994a1 1 0 0 1 .444 1.072l-.42 1.824a1 1 0 0 0 0 .448l.42 1.825a1 1 0 0 1-.444 1.07l-1.587.995a1 1 0 0 0-.316.316l-.994 1.587a1 1 0 0 1-1.071.444l-1.825-.42a1 1 0 0 0-.447 0l-1.825.42a1 1 0 0 1-1.071-.444l-.994-1.587a1 1 0 0 0-.317-.316l-1.586-.994a1 1 0 0 1-.444-1.071l.419-1.825a1 1 0 0 0 0-.448l-.42-1.824a1 1 0 0 1 .445-1.072l1.586-.994a1 1 0 0 0 .317-.316l.994-1.587a1 1 0 0 1 1.07-.443l1.826.419a1 1 0 0 0 .447 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.515 12.536l2.035 1.949l2.935-4.97"
                    />
                  </g>
                </svg>
                Gain de temps : déléguez les tâches administratives.
              </span>
            </div>
            <div className="mt-4">
              <span className="sm:text-xl font-bold sm:!leading-loose flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g fill="none" stroke="#000">
                    <path d="M14.049 5.54a1 1 0 0 1 1.071.443l.994 1.587a1 1 0 0 0 .316.316l1.587.994a1 1 0 0 1 .444 1.072l-.42 1.824a1 1 0 0 0 0 .448l.42 1.825a1 1 0 0 1-.444 1.07l-1.587.995a1 1 0 0 0-.316.316l-.994 1.587a1 1 0 0 1-1.071.444l-1.825-.42a1 1 0 0 0-.447 0l-1.825.42a1 1 0 0 1-1.071-.444l-.994-1.587a1 1 0 0 0-.317-.316l-1.586-.994a1 1 0 0 1-.444-1.071l.419-1.825a1 1 0 0 0 0-.448l-.42-1.824a1 1 0 0 1 .445-1.072l1.586-.994a1 1 0 0 0 .317-.316l.994-1.587a1 1 0 0 1 1.07-.443l1.826.419a1 1 0 0 0 .447 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.515 12.536l2.035 1.949l2.935-4.97"
                    />
                  </g>
                </svg>
                Efficacité : gestion optimisée pour plus de productivité.
              </span>
            </div>
            <div className="mt-4">
              <span className="sm:text-xl font-bold sm:!leading-loose flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g fill="none" stroke="#000">
                    <path d="M14.049 5.54a1 1 0 0 1 1.071.443l.994 1.587a1 1 0 0 0 .316.316l1.587.994a1 1 0 0 1 .444 1.072l-.42 1.824a1 1 0 0 0 0 .448l.42 1.825a1 1 0 0 1-.444 1.07l-1.587.995a1 1 0 0 0-.316.316l-.994 1.587a1 1 0 0 1-1.071.444l-1.825-.42a1 1 0 0 0-.447 0l-1.825.42a1 1 0 0 1-1.071-.444l-.994-1.587a1 1 0 0 0-.317-.316l-1.586-.994a1 1 0 0 1-.444-1.071l.419-1.825a1 1 0 0 0 0-.448l-.42-1.824a1 1 0 0 1 .445-1.072l1.586-.994a1 1 0 0 0 .317-.316l.994-1.587a1 1 0 0 1 1.07-.443l1.826.419a1 1 0 0 0 .447 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.515 12.536l2.035 1.949l2.935-4.97"
                    />
                  </g>
                </svg>
                Flexibilité : services sur mesure, quand vous en avez besoin.
              </span>
            </div>
          </h1>

          <div className="w-full mt-12">
            <a href="#contact" className="block">
              <button className="w-full text-black bg-pink-200 font-thin text-sm sm:text-lg shadow-lg p-4 rounded-full overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:bg-pink-300 relative">
                <span className="absolute inset-0 pink opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
                Nous contacter
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-12 sm:w-2/4 sm:ml-12">
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black text-sm sm:text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                d="M24 6.5c-.329 0-.659.07-.937.245C21.5 7.733 21.5 9.08 21.5 10v.5H17m-8 3h15m-7.5 0V24m-4.5-.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-8v-.25l1.922-7.495A3 3 0 0 1 6.328 6.5H7.5l1.447 2.894a2 2 0 0 0 1.79 1.106H15m-7.65-6s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C9.246 3.5 7.65 4.5 7.65 4.5z"
              />
            </svg>
            <div className="text-center space-y-12 font-bold">
              Secrétariat Général
            </div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black sm:text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M8.778 5h6.444c.822 0 1.469 0 1.99.043c.53.043.974.133 1.377.338a3.5 3.5 0 0 1 1.53 1.53c.205.403.295.847.338 1.378c.043.52.043 1.168.043 1.989v3.444c0 .822 0 1.469-.043 1.99c-.043.53-.133.974-.338 1.377a3.5 3.5 0 0 1-1.53 1.53c-.403.205-.847.295-1.378.338c-.52.043-1.167.043-1.989.043H8.778c-.821 0-1.468 0-1.99-.043c-.53-.043-.974-.133-1.377-.338a3.5 3.5 0 0 1-1.53-1.53c-.205-.403-.295-.847-.338-1.378c-.043-.52-.043-1.168-.043-1.989v-3.444c0-.821 0-1.468.043-1.99c.043-.53.133-.974.338-1.377a3.5 3.5 0 0 1 1.53-1.53c.403-.205.847-.295 1.378-.338C7.309 5 7.957 5 8.778 5M6.87 6.04c-.469.038-.766.11-1.005.232a2.5 2.5 0 0 0-.982.898l5.349 4.636c.377.327.64.554.859.716c.214.158.357.232.487.27c.276.082.569.082.845 0c.13-.037.273-.112.487-.27c.22-.162.481-.39.859-.716l5.348-4.636a2.5 2.5 0 0 0-.982-.898c-.239-.121-.536-.194-1.005-.233C16.654 6 16.048 6 15.2 6H8.8c-.848 0-1.455 0-1.93.04M4.54 8.37c-.04.475-.04 1.082-.04 1.93v3.4c0 .848 0 1.455.04 1.93c.038.469.11.766.232 1.005a2.5 2.5 0 0 0 .36.526l3.014-3.015a.5.5 0 0 1 .708.708l-2.911 2.91c.225.1.508.163.927.197C7.345 18 7.952 18 8.8 18h6.4c.848 0 1.454 0 1.93-.04c.42-.034.702-.096.927-.196l-2.91-2.91a.5.5 0 0 1 .707-.708l3.014 3.015q.212-.238.36-.526c.121-.239.194-.536.233-1.005c.039-.476.039-1.082.039-1.93v-3.4c0-.848 0-1.455-.04-1.93l-.015-.16l-5.036 4.364c-.36.312-.65.563-.904.751c-.261.194-.513.343-.8.427a2.5 2.5 0 0 1-1.41 0c-.287-.084-.538-.233-.8-.427c-.253-.187-.544-.44-.903-.75L4.555 8.208z"
              />
            </svg>
            <div className="text-center font-bold">Gestion Des courriers</div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black sm:text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25z"
              />
              <path
                fill="#000"
                d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z"
              />
            </svg>
            <div className="text-center font-bold">Suivi administratif</div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black sm:text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M40.358 12.581L26.363 6.04a5.74 5.74 0 0 0-4.857-.001l-13.863 6.47a2.295 2.295 0 0 0-.001 4.159l13.995 6.541a5.74 5.74 0 0 0 4.857.002l13.863-6.471a2.295 2.295 0 0 0 .001-4.159"
              />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m13.227 19.278l-5.584 2.606a2.295 2.295 0 0 0-.001 4.16l13.995 6.54a5.74 5.74 0 0 0 4.857.002l13.863-6.47a2.295 2.295 0 0 0 .001-4.159l-5.585-2.61"
              />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.227 28.654L7.643 31.26a2.295 2.295 0 0 0-.001 4.16l13.995 6.54a5.74 5.74 0 0 0 4.857.001l13.863-6.47a2.295 2.295 0 0 0 .001-4.159l-5.585-2.61"
              />
            </svg>
            <div className="text-center font-bold">
              Organisation de documents
            </div>
          </div>
        </div>
      </section>

      <section id="choose" className="sm:p-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-2">
            <div className="items-center">
              <h2 className="text-3xl text-center sm:text-start mt-10 font-bold text-gray-800">
                Pourquoi nous choisir ?
              </h2>
              <p className="mt-4 text-xl text-gray-600 text-center sm:text-start">
                Nous nous engageons à offrir un service exceptionnel et des
                résultats optimaux,
                <br /> afin de garantir une expérience client irréprochable à
                chaque étape.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pink-700 transition-transform duration-300 ease-in-out hover:translate-y-[-20px]">
                  <h3 className="text-xl font-semibold text-blue-600">500+</h3>
                  <p className="text-gray-500 mt-2">Clients</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pink-700 transition-transform duration-300 ease-in-out hover:translate-y-[-20px]">
                  <h3 className="text-xl font-semibold text-blue-600">98%</h3>
                  <p className="text-gray-500 mt-2">Satisfaction cliente</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pink-700 transition-transform duration-300 ease-in-out hover:translate-y-[-20px]">
                  <h3 className="text-xl font-semibold text-blue-600">
                    + de 20 ans
                  </h3>
                  <p className="text-gray-500 mt-2">Dans le milieu</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex mt-12 text-center shadow-xl">
              <Image
                className="rounded-3xl"
                src="/secretaire.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen">
        <div className="flex justify-center items-center pink rounded-3xl shadow-2xl max-w-96  sm:max-w-5xl mx-auto mt-20">
          <h1 className="text-black text-xl sm:text-4xl font-bold p-4">
            <span className="text-sm sm:text-2xl">Prêt à</span>
            <br />
            Commencez avec nous
          </h1>
          <Image
            className="ml-10 mt-10"
            src="/line2.svg"
            width={1}
            height={1}
            alt="line"
          />
          <p className="text-black text-xl sm:text-2xl p-4 mt-14 mb-8">
            Appelez nous : <br />
            <br />
            060656735
          </p>
          <svg
            className="sm:mt-14 sm:ml-5 mr-5"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 26 26"
          >
            <g fill="none">
              <defs>
                <mask id="pepiconsPencilHeadphoneCircleFilled0">
                  <path fill="#fff" d="M0 0h26v26H0z" />
                  <g fill="#000">
                    <path d="M20.406 17.911a.5.5 0 1 1-.95-.315c.358-1.076.544-2.236.544-3.43c0-4.725-2.971-7.912-7-7.912S6 9.44 6 14.166a10.9 10.9 0 0 0 .544 3.43a.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 5 14.166c0-5.262 3.403-8.912 8-8.912s8 3.65 8 8.912a11.9 11.9 0 0 1-.594 3.745" />
                    <path d="M8.977 20.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.018-2.938h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986M17.089 14a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 17.013 20h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 17.089 14" />
                  </g>
                </mask>
              </defs>
              <circle
                cx="13"
                cy="13"
                r="13"
                fill="#000"
                mask="url(#pepiconsPencilHeadphoneCircleFilled0)"
              />
            </g>
          </svg>
        </div>

        <div className="flex justify-center items-center pb-20 mt-48">
          <ContactForm></ContactForm>
        </div>
      </section>

      <section
        id="footer"
        className="flex items-center justify-between bg-gray-100 py-6 px-4"
      >
        <div>
          <h1 className="text-xs sm:text-lg text-black">
            Copyright : AmSecretariat, 2025
          </h1>
        </div>
        <div className="flex space-x-4 sm:space-x-8 ml-20">
          <Link
            href="/mentions"
            className="text-xs sm:text-lg text-black cursor-pointer hover:text-gray-500"
          >
            Mentions légales
          </Link>

          <Link href="/politique" passHref>
            <p className="text-xs sm:text-lg text-black cursor-pointer hover:text-gray-500">
              Politique de Confidentialité
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
