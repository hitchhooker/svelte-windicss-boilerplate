<script>
  const name = "Tommi Niemi";
  const profession = "Frontend developer";
  const email = "tommi@niemi.lol";
  const phone = "+358 40 442 32 67";
  const website = "niemi.lol";
  const skype = "tomminiemi";
  const github = "hitchhooker";
  const linkedin = "tomminiemi";
  const careerheader = "Career profile";
  const careercontent = "Career";
</script>

<div
  class="bg-pink-200 dark:bg-pink-900 py-6 flex flex-col justify-center sm:py-16"
>
  <div
    class="container relative sm:py-3 w-10/12 mx-auto sm:w-10/12 lg:w-9/12 xl:w-6/12"
  >
    <div
      class="absolute sm:rounded-tl-3xl sm:rounded-br-3xl sm:rounded-bl-lg sm:rounded-tr-lg inset-0 bg-gradient-to-r from-pink-700 to-pink-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"
    />
    <div
      class="relative bg-pink-50 shadow-lg sm:rounded-bl-lg rounded-tl-3xl rounded-br-3xl rounded-tr-none sm:rounded-tr-lg"
    >
      <div class="sm:flex sm:flex-row-reverse">
        <div class="sidebar sm:w-5/12 lg:w-4/12 xl:w-4/12 text-pink-50">
          <div
            class="text-center bg-gradient-to-r from-pink-600 to-pink-700 p-5 sm:py-10 rounded-tl-3xl sm:rounded-tl-none sm:rounded-tr-lg"
          >
            <img
              src="http://niemi.lol/assets/images/tommi_cv_small.png"
              alt="Profilepicture"
              width="160px"
              height="160px"
              class="w-40 mx-auto my-5 shadow-lg rounded-full"
            />
            <h1 class="text-shadow-xl text-3xl font-extrabold">{name}</h1>
            <p class="text-shadow-lg text-lg font-semibold">{profession}</p>
          </div>
          <div
            class="subsidebar bg-gradient-to-r from-pink-500 to-pink-600 sm:rounded-br-3xl p-10 sm:p-6"
          >
            <div class="contact">
              <h3>Contact</h3>
              <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li><a href="https://{website}/">{website}</a></li>
                <li><a href="https://skype.com/{skype}">{skype}</a></li>
                <li><a href="https://github.com/{github}">{github}</a></li>
                <li>
                  <a href="https://linkedin.com/in/{linkedin}">{linkedin}</a>
                </li>
              </ul>
            </div>
            <div class="education pt-2 sm:pt-4">
              <h3>Education</h3>
              <ul>
                <li>
                  University of Turku<br />
                  IT Engineer 2012 - 2017<br />
                </li>
                <li>
                  Kupittaa ICT High School<br />
                  Abitur 2007 - 2010<br />
                </li>
              </ul>
            </div>
            <div class="languages pt-2 sm:pt-4">
              <h3>Languages</h3>
              <ul>
                <li>English</li>
                <li>Finnish</li>
                <li>Swedish</li>
                <li>Portuguese</li>
              </ul>
            </div>
            <div class="interests pt-2 sm:pt-4">
              <h3>Interests</h3>
              <ul>
                <li>fuckboying</li>
                <li>Sailing</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="content bg-gradient-to-b from-pink-50 to-pink-100  sm:w-7/12 lg:w-8/12 sm:rounded-bl sm:rounded-tl-3xl"
        >
          <div class="career-profile p-10 sm:p-6 md:p-7 lg:p-8 xl:p-10">
            <i class="fas fa-user fa-stack-1x fa-inverse" />
            <h3>{careerheader}</h3>
            <p>{careercontent}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
