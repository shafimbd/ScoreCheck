import Image from "next/image"

const partners = [
  {
    name: "Bangladesh Bank",
    logo: "https://www.bb.org.bd/assets/images/bb_logo.png",
    description: "Central Bank of Bangladesh",
  },
  {
    name: "RJSC",
    logo: "https://www.roc.gov.bd/images/logo.png",
    description: "Registrar of Joint Stock Companies",
  },
  {
    name: "NBR",
    logo: "https://nbr.gov.bd/uploads/settings/logo_english/2019-05-29-5cee2d1c8b5b5.png",
    description: "National Board of Revenue",
  },
  {
    name: "ICAB",
    logo: "https://www.icab.org.bd/images/icab-logo.png",
    description: "Institute of Chartered Accountants of Bangladesh",
  },
  {
    name: "Election Commission",
    logo: "https://www.ecs.gov.bd/MenuExternalImages/Domain_Icon_Images/ecs.png",
    description: "Bangladesh Election Commission",
  },
  {
    name: "Commerce Ministry",
    logo: "https://mincom.gov.bd/sites/default/files/files/mincom.portal.gov.bd/files/0a1a6d38_5c6c_4c53_b78c_0a6d38c5c6c4/2020-12-29-17-58-c8b5b5c8b5b5c8b5b5.png",
    description: "Ministry of Commerce, Bangladesh",
  },
  {
    name: "City Corporations",
    logo: "/placeholder.svg?height=80&width=80&text=CC",
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
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${partner.name.substring(0, 2)}`
                  }}
                />
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
