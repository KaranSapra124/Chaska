export const AboutUs = () => {
  return (
    <>
      <main className="container mx-auto my-8">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-6">About Chaska</h1>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt="Chaska Restaurant"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                Chaska is a place where flavor meets tradition. Nestled in the
                heart of the city, we strive to deliver an unforgettable
                culinary experience to our patrons. Our chefs blend traditional
                recipes with modern techniques to create dishes that tantalize
                your taste buds.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                At Chaska, we're not just about serving food; we're about
                creating memories. Whether you're here for a family dinner, a
                romantic evening, or a casual gathering with friends, we ensure
                every moment is filled with joy and satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="flex  flex-row   md:flex-row items-center justify-between " >
          <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt="Chaska Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                Our team at Chaska is a passionate group of individuals who
                share a common love for food and hospitality. From our chefs
                crafting exquisite dishes to our servers providing top-notch
                service, every member plays a crucial role in ensuring your
                dining experience is nothing short of exceptional.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                We believe in the power of teamwork and dedication. Each day, we
                come together to bring you the finest flavors and warmest
                hospitality, making Chaska not just a restaurant, but a
                destination for culinary delight and cherished memories.
              </p>
            </div>
           
          </div>
        </section>
      </main>
    </>
  );
};
