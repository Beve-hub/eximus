const Profile = () => {
  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-red-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-700">
            Our Company
          </p>
        </div>
      <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-gray-900 mb-5">
        CORPORATE PROFILE
      </h2>
       
      <p className="text-sm text-gray-500 leading-relaxed max-w-xl my-4">
        Engineering solutions today. Energy tomorrow.
      </p>

      <div className="w-18 h-px bg-[var(--accent)]" />
      <p className="text-md text-gray-500 leading-relaxed my-6">
        Eximus Energy is a Nigerian-focused integrated energy and EPCM company
        providing engineering, procurement, construction, project management,
        operations support and strategic advisory services across the oil and
        gas value chain.<br /><br />
        We support operators, investors, developers and asset owners with
        practical, execution-driven solutions tailored to the realities of
        operating in Nigeria&lsquo;s onshore, swamp and offshore environments.<br /><br />
        Our leadership team and strategic partners collectively bring over 150
        years of international experience spanning Nigeria, West Africa, the
        Middle East, Europe and North America. Whether supporting a greenfield
        development, brownfield upgrade, modular process facility, gas
        commercialization initiative, pipeline system, flowstation or strategic
        acquisition, Eximus Energy delivers fit-for-purpose solutions designed
        around our clients&lsquo; goals, schedules and operational priorities.
      </p>
    </section>
  );
};

export default Profile;