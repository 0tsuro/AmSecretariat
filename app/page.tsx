import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="flex flex-col-6 justify-center items-center space-x-20 p-8">
        <div>
          <a
            href="/"
            className="text-black text-4xl cursor-pointer relative group"
          >
            AmSecretariat
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-1000 group-hover:w-0"></span>
          </a>
        </div>
        <div className="sm:flex space-x-20 sm:text-4xl hidden">
          <a
            href="/"
            className="text-black text-4xl cursor-pointer relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
          <a
            href="#aboutus"
            className="text-black text-4xl cursor-pointer relative group"
          >
            À propos
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
          <a
            href="#service"
            className="text-black text-4xl cursor-pointer relative group"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
          <a
            href="#plans"
            className="text-black text-4xl cursor-pointer relative group"
          >
            Nos plans
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-black text-4xl cursor-pointer relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-1000 group-hover:w-full"></span>
          </a>
        </div>
      </header>

      <main className="sm:min-h-screen space-x-96 flex flex-col pt-10 sm:justify-start sm:relative p-8">
        <div className="flex flex-col items-center space-y-4 p-4 sm:items-start sm:pl-32 relative sm:top-48">
          <h1 className="text-black text-center text-3xl sm:text-6xl sm:text-start">
            Professionnel indépendant qui <br />
            travaille à distance pour vous <br />
            aider dans votre activité
          </h1>
          <p className="text-black text-center text-sm sm:text-xl sm:text-start">
            Vous pouvez facilement confier à nos assistants virtuels les tâches
            qui nécessitent <br />
            du temps, de la précision et de la patience.
          </p>
          <div className="flex flex-col-2 sm:space-x-10 pt-10">
            <Image
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-3 active:scale-95"
              src="/button.svg"
              width={300}
              height={300}
              alt="Demander un devis"
            />
            <button className="relative pink text-white text-sm sm:text-lg shadow-lg p-4 px-10 rounded-full overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:bg-pink-300">
              <span className="absolute inset-0 bg-pink-300 opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
              À propos
            </button>
          </div>
        </div>
      </main>

      <section id="aboutus" className="min-h-screen flex bg-white">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-20 p-20">
          <Image
            className="transition-transform duration-300 ease-in-out hover:translate-y-[-20px]"
            src="/group.svg"
            width={800}
            height={800}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-pink-300 text-xl sm:text-4xl">À propos</p>
            <h1 className="text-black text-xl sm:text-3xl sm:!leading-loose">
              <span className="sm:text-5xl">
                Notre métier est de vous rendre <br />
                la vie plus facile et plus confortable
              </span>{" "}
              <br />
              Quis ipsum suspendisse ultrices gravida risus coe <br />
              maecenas accumsan lacus vel facilisis. <br />
              <span className="sm:text-5xl">
                01. Comment pouvons-nous aider votre entreprise ?
              </span>{" "}
              <br />
              Autem vel eum iure reprehenderit qui in ea voluptate <br />
              velit esse ruam molestiae consequatur. <br />
              <span className="sm:text-5xl">
                02. Pourquoi devenir notre partenaire ?
              </span>{" "}
              <br />
              Reprehenderit in voluptate velit esse cillum dolore eua <br />
              fugiat nulla pariatur. <br />
            </h1>
          </div>
        </div>
      </section>
      <section
        id="service"
        className="min-h-screen flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:w-2/4 ml-12">
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="96"
              viewBox="0 0 34 32"
            >
              <g fill="#000">
                <path d="M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227L13.853.147a.5.5 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5M14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5z" />
                <path d="M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1" />
                <path d="M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227l-6.999-6.999a.5.5 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1m6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11z" />
                <path d="M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1" />
              </g>
            </svg>
            <div className="text-center space-y-12">
              Gestion de <br /> documents
            </div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="96"
              viewBox="0 0 34 32"
            >
              <g fill="#000">
                <path d="M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227L13.853.147a.5.5 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5M14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5z" />
                <path d="M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1" />
                <path d="M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227l-6.999-6.999a.5.5 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1m6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11z" />
                <path d="M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1" />
              </g>
            </svg>
            <div className="text-center">
              Gestion De <br /> données
            </div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="96"
              viewBox="0 0 34 32"
            >
              <g fill="#000">
                <path d="M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227L13.853.147a.5.5 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5M14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5z" />
                <path d="M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1" />
                <path d="M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227l-6.999-6.999a.5.5 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1m6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11z" />
                <path d="M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1" />
              </g>
            </svg>
            <div className="text-center">
              Gestion De <br /> données
            </div>
          </div>
          <div className="flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-20px] text-black text-2xl items-center space-y-20 py-20 border-pink-700 bg-white border-b-4 rounded-3xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="96"
              viewBox="0 0 34 32"
            >
              <g fill="#000">
                <path d="M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227L13.853.147a.5.5 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5M14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5z" />
                <path d="M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1" />
                <path d="M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.4.4 0 0 0-.013-.062a.5.5 0 0 0-.122-.227l-6.999-6.999a.5.5 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1m6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11z" />
                <path d="M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1" />
              </g>
            </svg>
            <div className="text-center">
              Gestion De <br /> données
            </div>
          </div>
        </div>

        <div className="sm:w-2/4 flex flex-col">
          <p className="text-pink-300 text-xl sm:text-4xl">À propos</p>
          <h1 className="text-black text-xl sm:text-3xl sm:!leading-loose">
            <span className="sm:text-5xl">
              Notre métier est de vous rendre <br />
              la vie plus facile et plus confortable
            </span>{" "}
            <br />
            Quis ipsum suspendisse ultrices gravida risus coe <br />
            maecenas accumsan lacus vel facilisis. <br />
            <span className="sm:text-5xl">
              01. Comment pouvons-nous aider votre entreprise ?
            </span>{" "}
            <br />
            Autem vel eum iure reprehenderit qui in ea voluptate <br />
            velit esse ruam molestiae consequatur. <br />
            <span className="sm:text-5xl">
              02. Pourquoi devenir notre partenaire ?
            </span>{" "}
            <br />
            Reprehenderit in voluptate velit esse cillum dolore eua <br />
            fugiat nulla pariatur. <br />
          </h1>
        </div>
      </section>

      <section id="plans" className="min-h-screen">
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-black text-3xl">Nos plans</h1>
          <div className="flex p-8">
            <p className="text-black text-6xl">
              Découvrez les meilleurs plans selon vos besoins
            </p>
          </div>
        </div>
        <div className="flex flex-col-3 justify-center items-center space-x-20">
          <div className="flex flex-col bg-white rounded-3xl shadow-xl">
            <Image src="/plan.png" width={500} height={500} alt="Plans" />
            <div className="p-8 text-center">
              <h1 className="text-black text-3xl p-8">Entrepreneur plan</h1>
              <p className="text-black text-xl">
                12h / semaines <br />
                <br />
                1 secrétaire assigné <br />
                <br />
                disponible de 9h à 19h
              </p>
              <button className="relative overflow-hidden group text-black text-3xl pink p-4 rounded-3xl mt-8 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:pink">
                <span className="absolute inset-0 bg-pink-300 opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
                Demander un devis
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-3xl shadow-xl">
            <Image src="/plan.png" width={500} height={500} alt="Plans" />
            <div className="p-8 text-center">
              <h1 className="text-black text-3xl p-8">Entrepreneur plan</h1>
              <p className="text-black text-xl">
                12h / semaines <br />
                <br />
                1 secrétaire assigné <br />
                <br />
                disponible de 9h à 19h
              </p>
              <button className="relative overflow-hidden group text-black text-3xl pink p-4 rounded-3xl mt-8 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:pink">
                <span className="absolute inset-0 bg-pink-300 opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
                Demander un devis
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-3xl shadow-lg">
            <Image src="/plan.png" width={500} height={500} alt="Plans" />
            <div className="p-8 text-center">
              <h1 className="text-black text-3xl p-8">Entrepreneur plan</h1>
              <p className="text-black text-xl">
                12h / semaines <br />
                <br />
                1 secrétaire assigné <br />
                <br />
                disponible de 9h à 19h
              </p>
              <button className="relative overflow-hidden group text-black text-3xl pink p-4 rounded-3xl mt-8 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:pink">
                <span className="absolute inset-0 bg-pink-300 opacity-0 group-active:opacity-30 rounded-lg transition-opacity duration-500"></span>
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen">
        <div className="flex justify-center items-center pink rounded-3xl shadow-2xl max-w-5xl mx-auto mt-20">
          <h1 className="text-black text-6xl">
            <span className="text-2xl">Prêt à</span>
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
          <p className="text-black text-2xl p-4 mt-14 mb-8">
            Appelez nous : <br />
            <br />
            060656735
          </p>
          <svg
            className="mt-14 ml-5"
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

        <div className="flex justify-center items-center mt-20 pb-20">
          <Image src="/contact.png" width={1000} height={1000} alt="form" />
        </div>
      </section>

      <section id="footer" className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl text-black">
            Copyright : AmSecretariat, 2025
          </h1>
          <p className="text-xl text-black cursor-pointer hover:text-gray-500">
            Mentions légales
          </p>
        </div>
      </section>
    </div>
  );
}
