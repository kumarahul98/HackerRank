import React from 'react';
import _ from 'underscore';
function Articles({articles, sortOrder}) {
// console.log(articles);
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {_.sortBy(articles,[sortOrder]).map( 
                    result =>
                    <tr data-testid="article" key={result.upvotes}>
                    <td data-testid="article-title">{result.title}</td>
                    <td data-testid="article-upvotes">{result.upvotes}</td>
                    <td data-testid="article-date">{result.date}</td>
                </tr>
                ).reverse()}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
