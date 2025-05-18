function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="category-filter">
            {categories.map(category => (
                <button
                    key={category}
                    className={category === selectedCategory ? 'active' : ''}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;