import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { FaAlignLeft, FaEllipsisV } from 'react-icons/fa';
import { logOut } from '../../store/actions/authActions';

const Head = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeChange = path => {
    history.push(path);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/auth/signin');
    window.location.reload();
  };
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.authReducer.isLoggedIn,
  }));

  return (
    <div className='container-fluid p-0 m-0 border-bottom bg-white'>
      <div className='container p-0 py-1'>
        <div className='row m-0 p-0'>
          <div className='col-4 p-0 text-left d-flex align-items-center'>
            <h3>
              <NavLink to='/category/article'>
                <FaAlignLeft className='mr-2 text-info' />
              </NavLink>
            </h3>
          </div>
          <div className='col-4 mr-auto d-flex align-items-center justify-content-center'>
            <form className='md-form w-100 d-none d-md-flex'>
              <input
                type='text'
                placeholder='Search'
                aria-label='Search'
                className='form-control searchBar bg-light mr-auto ml-auto rounded p-2 theBorder'
                onClick={() => routeChange('/search/writing')}
              />
            </form>
          </div>
          <div className='col-auto d-flex align-items-center p-0'>
            <NavLink to='/writing/write'>
              <button type='button' className='btn btn-sm btn-outline-dark'>
                Begin to Write
              </button>
            </NavLink>
            <div className='btn-group dropleft'>
              <button
                type='button'
                className='btn btn-link text-dark simplebox'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                <FaEllipsisV className='d-md-none mr-0 p-0 lead' />
                <FaEllipsisV className='d-none d-md-block lead' />
              </button>
              <div className='dropdown-menu'>
                <button
                  className='dropdown-item simplebox'
                  type='button'
                  data-toggle='modal'
                  data-target='#languageSelectorModal'>
                  not
                </button>
                {isLoggedIn && (
                  <>
                    <div className='dropdown-divider' />
                    <button
                      className='dropdown-item font-weight-bold'
                      type='button'
                      onClick={handleLogOut}>
                      no
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
