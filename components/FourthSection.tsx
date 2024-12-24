import SalesButton from "./SalesButton"
import Stats from "./Stats"

const stats = [
    {
        title: 'Proven Strategies for Success',
        description: 'We leverage the latest web development techniques and best practices to create <strong>websites that attract and convert</strong> your ideal clients.'
    },
    {
        title: 'Dedicated Human Support Team',
        description: 'Our <strong>trained professionals</strong> ensure that every project is <strong>handled with care</strong>, answering all your questions promptly and providing the support you need throughout the development process.'
    },
    {
        title: 'Customized Solutions',
        description: 'We offer tailored web development services that meet your specific business needs, so you get a website that truly <strong>reflects your brand</strong> and <strong>engages your audience</strong>.'
    },
    {
        title: 'No Upfront Costs',
        description: 'You can get started with our services with <strong>no upfront fees</strong>, making it easier for you to <strong>invest in your online presence</strong>.'
    },
    {
        title: 'Transparent Pricing',
        description: 'We provide clear and fair pricing structures, so you know exactly what you’re paying for with <strong>no hidden costs or surprises</strong>.' 
    },
    {
        title: '30-Day Satisfaction Guarantee:',
        description: `Experience our services <strong>risk-free</strong> for 30 days. If you're not completely satisfied, we’ll work with you to make it right or help you find a solution.`
    },
    {
        title: 'Quick Turnaround Time',
        description: 'We value your time and work efficiently to deliver <strong>high-quality websites</strong> within your deadlines, so you can <strong>launch your online presence</strong> as soon as possible.'
    },
]

const FourthSection = () => {
  return (
    <div className="py-10 flex flex-col items-center">
        <h2 className='text-4xl font-bold text-white text-center'>Why Slick Site is the Perfect Partner for Your Business Website Needs</h2>
        <div className="grid mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {stats.map((stat, index) => (
                <div key={index} className='bg-white p-6 rounded-lg'>
                    <h3 className='text-2xl font-bold text-[#2B2D42]'>✅ {stat.title}</h3>
                    <p className='mt-4 text-[#2B2D42]' dangerouslySetInnerHTML={{ __html: stat.description }} />
                </div>
            ))}
        </div>
        <SalesButton />
        <Stats />
    </div>
  )
}

export default FourthSection
