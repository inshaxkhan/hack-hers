const teamMembers = [
  {
    id: 1,
    name: 'Insha Khan',
    SAP_ID: '52352787',
    mobile: '+1 (555) 123-4567',
    
  },
  {
    id: 2,
    name: 'Madiha',
    SAP_ID: '52352787',
    mobile: '9876543210',
    
  },
  
  {
    id: 3,
    name: 'Shubhi Shukla',
    SAP_ID: '52365330',
    mobile: '8299443180',
    
  },
]

function Contact() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-fuchsia-400 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Our Team
          </h1>
          <p className="mt-2 text-slate-400">
            Meet the people behind HackHers
          </p>
        </div>

        {/* 3 Image Containers - Top */}
        <div className="flex justify-center gap-6 md:gap-10 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white/5 border-2 border-white/10 flex items-center justify-center ring-2 ring-fuchsia-500/20 hover:ring-fuchsia-500/40 hover:border-fuchsia-500/30 transition-all duration-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold text-slate-500">
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="text-sm text-slate-400 font-medium">{member.name}</span>
            </div>
          ))}
        </div>

        {/* Team Table - Dark themed like reference */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-4 pl-6 pr-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Member
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Mobile No.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {teamMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-white/[0.04] transition-colors">
                    <td className="py-4 pl-6 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-sm font-semibold text-slate-400">
                              {member.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <span className="font-medium text-white">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-2">
                        <code className="text-sm text-slate-300 font-mono">
                          {member.SAP_ID}
                        </code>
                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-xs text-slate-400">
                          Team
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-slate-300 font-mono text-sm">
                        {member.mobile}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add image hint */}
        <p className="mt-6 text-center text-xs text-slate-500">
          To add photos, set the <code className="px-1.5 py-0.5 rounded bg-white/5">image</code> property in the teamMembers array in Contact.jsx
        </p>
      </div>
    </div>
  )
}

export default Contact
