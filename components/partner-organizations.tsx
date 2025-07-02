import Image from "next/image"

const partners = [
  {
    name: "Bangladesh Bank",
    logo: "/images/partners/bangladesh-bank.png",
    description: "Central Bank of Bangladesh",
  },
  {
    name: "RJSC",
    logo: "/images/partners/rjsc.png",
    description: "Registrar of Joint Stock Companies",
  },
  {
    name: "NBR",
    logo: "/images/partners/nbr.png",
    description: "National Board of Revenue",
  },
  {
    name: "ICAB",
    logo: "/images/partners/icab.png",
    description: "Institute of Chartered Accountants of Bangladesh",
  },
  {
    name: "Election Commission",
    logo: "/images/partners/election-commission.png",
    description: "Bangladesh Election Commission",
  },
  {
    name: "Commerce Ministry",
    logo: "/images/partners/commerce-ministry.png",
    description: "Ministry of Commerce, Bangladesh",
  },
  {
    name: "City Corporations",
    logo: "/images/partners/city-corporations.png",
    description: "Bangladesh City Corporations",
  },
]

export function PartnerOrganizations() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted Partner Organizations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work closely with leading government and regulatory organizations to ensure comprehensive data coverage
            and compliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 relative mb-3 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-500 leading-tight">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-semibold">Comprehensive Data Integration:</span> Access verified data from all major
            government and financial institutions in Bangladesh for complete credit assessment coverage.
          </p>
        </div>
      </div>
    </section>
  )
}
