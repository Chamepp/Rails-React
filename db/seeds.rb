1.times do |index|
    users = User.create! (
        firstname: 'Ashkan',
        lastname: 'Ebtekari',
        phone: '347325654',
        email: 'chamepp@star.com',
        password: 'chameppstar',
        password_confirmation: 'chameppstar'
    )
end
puts('Created User Successfully !')


20.times do |index|
    products = Product.create! (
        number: index,
        title: "Title #{index}",
        price: "#{index}",
        category: "Herbal",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
    )
end
puts('Created Products Successfully')