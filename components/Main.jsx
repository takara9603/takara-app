import Image from 'next/image'
import Card from './Card';


const Main = (props) => {
    return (
        <main className="tracking-wider leading-5">

        {/* hero */}
        <section className="relative bg-header-green">
          <div className="container flex flex-col lg:flex-row items-center gap-12 p-8">
              {/* comment */}
              <div className="flex flex-1 flex-col items-center lg:items-start ml-12">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold mb-4">Takara's portfolio</h1>
                <h2 className="text-white text-opacity-70 text-center mb-4 lg:text-left">高良の説明書</h2>
              </div>
              {/* Image */}
              <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <Image src='/images/hero.png' width={512} height={512} alt='hero image' className="object-contain w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
              </div>
          </div>
        </section>

        <div>
          {/* About */}
          <section id="about" className="bg-about bg-cover bg-center py-14 text-center">
            <h2 className="">私について<span className="section-nav">About</span></h2>
            <div className="grid grid-cols-3 auto-cols-max items-center mx-36 px-20">
              <Card 
                src={'/images/about-1.png'}
                alt={'about画像1'}
                title={'趣味'}
                text={'筋トレです。筋トレは、筋肉が成長するだけではありません。ストレス発散・健康・モチベーションアップ・自尊心の向上といった様々な良いことがあります。実際、私も筋トレで、意欲向上し様々なことを学びたいと行動するようになりました！'}
              />
              <Card 
                src={'/images/about-2.png'}
                alt={'about画像2'}
                title={'好きな食べ物'}
                text={'果物です。旬な果物を食べるのが好きで、そのままはもちろん、お菓子やスムージーにしてほぼ毎日果物を食べています。天然の甘さでとても美味しく、消化の助けを必要としないため、健康にも良いという点も相まって大好きな食べ物です。'}
              />
              <Card 
                src={'/images/about-3.png'}
                alt={'about画像3'}
                title={'性格'}
                text={'人と関わるのが好きな性格です。多くの方と関ると、自分が体験したことのない出来事や考え方を聞くことができます。関わった方の数だけ、自分の考え方や知識が広がると思います。人の話を積極的に吸収して自分に生かして行きたいです！'}
              />
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="relative bg-skills bg-cover bg-center py-16 text-center -mt-9 z-50">
            <div className="flex">
              <div className="grid grid-cols-2 gap-4 mx-36 px-20 -pl-5">
                <div className="">
                  <Image src='/images/skill.png' width={512} height={512} alt='skill画像' className="object-contain h-full" />
                </div>
                <div>
                  <div>
                    <h2 className="text-center">スキル<span className="section-nav">Skills</span></h2>
                    <p className="">未経験のためスキルは殆どありません。ですが、アプリの作成やこのポートフォリオを作成するなど、実際に自分で1からプログラミングを作り上げることで、楽しさとともに身についていくのだと感じています。諦めずに粘り強く頑張り続けるスキルは持っています！</p>
                  </div>
                  {/* skillsbar */}
                  <div className="bg-white rounded my-3 p-6">
                    <ul className="text-font-green uppercase">
                     
                      <li className="grid grid-cols-6">
                        <p className="col-span-6">HTML5</p>
                        <div className="col-span-5 mt-2 h-3 relative w-auto rounded-md overflow-hidden">
                          <div className="w-full h-full bg-header-green bg-opacity-40 absolute "></div>
                          <div className="h-full bg-header-green absolute" style={{ width: "80%" }}></div>
                        </div>
                        <p className="ml-2 col-span-1">80%</p>
                      </li>
                      <li className="grid grid-cols-6">
                        <p className="col-span-6">CSS</p>
                        <div className="col-span-5 mt-2 h-3 relative w-auto rounded-md overflow-hidden">
                          <div className="w-full h-full bg-header-green bg-opacity-40 absolute "></div>
                          <div className="h-full bg-header-green absolute" style={{ width: "65%" }}></div>
                        </div>
                        <p className="ml-2 col-span-1">65%</p>
                      </li>
                      <li className="grid grid-cols-6">
                        <p className="col-span-6">python</p>
                        <div className="col-span-5 mt-2 h-3 relative w-auto rounded-md overflow-hidden">
                          <div className="w-full h-full bg-header-green bg-opacity-40 absolute "></div>
                          <div className="h-full bg-header-green absolute" style={{ width: "50%" }}></div>
                        </div>
                        <p className="ml-2 col-span-1">50%</p>
                      </li>
                      <li className="grid grid-cols-6">
                        <p className="col-span-6">javascript</p>
                        <div className="col-span-5 mt-2 h-3 relative w-auto rounded-md overflow-hidden">
                          <div className="w-full h-full bg-header-green bg-opacity-40 absolute "></div>
                          <div className="h-full bg-header-green absolute" style={{ width: "30%" }}></div>
                        </div>
                        <p className="ml-2 col-span-1">30%</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section id="values" className="text-center bg-cover bg-white py-14">
            <h2 className="">価値観<span className="section-nav">Values</span></h2>
            <div className="relative bg-white rounded-xl grid grid-cols-3 divide-x divide-line-green items-center z-40 mx-32 px-14 ">
                <Card 
                    src='/images/value1.png'
                    alt='value画像1'
                    title='人とのつながり'
                    text='人とのつながりを大切にしています。忙しさに追われ、コミュニケーションの時間を削ってしまうことにより、生活の質も下がり悪循環になってしまいます。自分や周りの人と気持ちよく生活するためにも、信頼関係を築き上げ、つながりを大切にしています。'
                />
                <Card 
                    src='/images/value2.png'
                    alt='value画像2'
                    title='自己成長'
                    text='これから、技術が発達しどんどん社会は変化していくと考えています。その社会に対応し続けていくために、自分から情報を取りに行き学ぶ姿勢は必要不可欠です。学習や体験から自己成長につながることをし続けていきます！'
                />
                <Card 
                    src='/images/value3.png'
                    alt='value画像3'
                    title='健康'
                    text='何をするにも健康は必要不可欠です。そして、身体的だけでなく心の健康も重要です。心身ともに健康な状態を維持することで、自分に余裕がもてるのでがやりたいことに行動を移せたり、周りのことを気にかけられるなど、身体的・精神的にも強く生活していきたいです。'
                />
            </div>
          </section>

          {/* Future */}
          <section id="future" className="relative bg-future bg-cover bg-no-repeat bg-center text-center pt-20 -mt-64 z-30">
            <div className="pt-8 mt-32 mx-36 grid grid-rows-4 grid-flow-col gap-5">
              <div className="row-span-1 text-left">
                <h2 className="text-2xl">3年後にやりたいこと<span className="section-nav">Future</span></h2>
              </div>
              <div className="row-span-3">
                <p className="">私は、3年後に人の生活水準が上がるようなアプリ開発を行いたいです。まだ、プログラミングやAIでできることの一部しか知りません。そして、これからも発展していくであろう技術を使える側になり、人の健康・仕事・プライベートなどの水準が上がるようなアプリを制作したいです。そのために、技術を学び吸収していきたいです！</p>
              </div>
              <div className="row-span-4">
                <Image src="/images/future.png" width={512} height={512} className="object-contain h-full m-auto" />
              </div>
            </div>
          </section>
        </div>
      </main>

    )
};

export default Main;