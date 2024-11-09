import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'; // Certifique-se de que o caminho está correto
import Footer from '../components/Footer'; // Supondo que você tenha um Footer também
import styles from '../assets/css/index.module.css'; 

const HomePage = () => {
  const workoutSchedule = {
    '08:00': { Monday: ['Jiu-Jitsu'], Tuesday: ['MMA'], Wednesday: ['Muay Thai'], Thursday: ['Boxe'], Friday: ['Jiu-Jitsu'], Saturday: ['CrossFit'] },
    '10:00': { Monday: ['Boxe'], Tuesday: ['Muay Thai'], Wednesday: ['Jiu-Jitsu'], Thursday: ['MMA'], Friday: ['CrossFit'], Saturday: ['Yoga'] },
    '14:00': { Monday: ['CrossFit'], Tuesday: ['Jiu-Jitsu'], Wednesday: ['Boxe'], Thursday: ['Muay Thai'], Friday: ['MMA'], Saturday: [] },
    '16:00': { Monday: ['Yoga'], Tuesday: ['CrossFit'], Wednesday: ['MMA'], Thursday: ['Jiu-Jitsu'], Friday: ['Boxe'], Saturday: [] },
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <Head>
        <title>Gracie Barra</title>
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Importa o Header no topo da página */}
      <Header />

      <main className={styles.main}>
        {/* HERO Section */}
        <section className={`${styles.hero} bg-dark has-after has-bg-image`} id="home">
          <div className="container">
            <div className={styles.heroContent}>
              <p className={styles.heroSubtitle}>
                <strong className={styles.strong}>Gracie</strong> Barra
              </p>
              <h1 className={styles.heroTitle}>Acompanhe seu progresso</h1>
              <p className={styles.sectionText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsa doloribus reprehenderit impedit architecto consequuntur aperiam perspiciatis perferendis qui quam numquam, dicta, eveniet quis quidem vitae ducimus incidunt ullam et.
              </p>
            </div>

            <div className={styles.heroBanner}>
              <img src="/assets/images/gracie2.png" width="500" height="753" alt="hero banner" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`${styles.section} ${styles.about}`} id="about" aria-label="about">
          <div className="container">
            <div className={styles.heroBanner}>
              <img src="/assets/images/gracie1.png" width="660" height="648" loading="lazy" alt="about banner" className="w-100" />
            </div>

            <div className={styles.aboutContent}>
              <h2 className={`${styles.h2} ${styles.sectionTitle}`}>Visualize a agenda das aulas</h2>
              <p className={styles.sectionText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt autem culpa qui ab fuga placeat veritatis maiores, dicta alias nulla, earum optio aut? Aliquid quae nesciunt molestiae? Libero, enim voluptas!
              </p>
              <p className={styles.sectionText}>
                Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.
              </p>
            </div>
          </div>
        </section>

        {/* Workout Schedule Table */}
        <section className={styles.workoutSchedule} style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Horários das Modalidades de Treino</h2>
          <table className={styles.scheduleTable}>
            <thead>
              <tr className={styles.scheduleHeader}>
                <th>Horário</th>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(workoutSchedule).map((time) => (
                <tr key={time} className={styles.scheduleRow}>
                  <td>{time}</td>
                  {daysOfWeek.map((day) => (
                    <td key={day} className={styles.scheduleCell}>
                      {workoutSchedule[time][day]?.length ? (
                        workoutSchedule[time][day].map((activity, index) => (
                          <div key={index}>{activity}</div>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* Importa o Footer no final da página */}
      <Footer />
    </>
  );
};

export default HomePage;
